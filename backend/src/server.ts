/**
 * Module dependencies.
 */
import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as dotenv from "dotenv";
import * as cors from "cors";
import * as database from "./utils/database";
import * as preLauchTask from "./utils/preLauchTask";

import { createServer } from "http";
import mongoose = require("mongoose");
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import expressValidator = require("express-validator");
import { SubscriptionServer } from "subscriptions-transport-ws";

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });


/**
 * Websocket
 */
import * as fromSocket from "./socket";

/**
 * Schema for GraphQL
 */
import { schema } from "./graphql/schema";

/**
 * Controllers (route handlers).
 */
import * as testController from "./controllers/test";
import * as kioskController from "./controllers/kiosk";
import { execute, subscribe } from "graphql";

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
database.connectDatabase(process.env.MONGODB_URI || process.env.MONGOLAB_URI)
    .then(async () => await preLauchTask.makeAllKioskOffline());
mongoose.connection.on("error", () => {
    console.log("MongoDB connection error. Please make sure MongoDB is running.");
    process.exit();
});

/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use("", express.static("dist"));

/**
 * Primary app routes.
 */
app.get("/api/test", testController.index);
app.post("/api/login", kioskController.postLogin);

/**
 * Config graphQL route
 */
app.use("/graphql", graphqlExpress({
    schema: schema
}));
app.use("/graphiql", graphiqlExpress({
    endpointURL: "/graphql",
    subscriptionsEndpoint: `ws://localhost:${app.get("port")}/subscriptions`
}));

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = createServer(app);
server.listen(app.get("port"), async () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    // Set up the WebSocket for handling GraphQL subscriptions
    new SubscriptionServer(
        {
            execute,
            subscribe,
            schema
        }, {
            server: server,
            path: "/subscriptions",
        });
    console.log("  Press CTRL-C to stop\n");
});

/**
 * Setup socket.io
 */
export const io = fromSocket.listen(server);


module.exports = app;