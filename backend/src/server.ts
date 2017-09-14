/**
 * Module dependencies.
 */
import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as dotenv from "dotenv";
import { createServer } from "http";
import mongoose = require("mongoose");
import * as Bluebird from "bluebird";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";

/**
 * Schema for GraphQL
 */
import { schema } from "./graphql/schema";

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env" });

/**
 * Controllers (route handlers).
 */
import * as testController from "./controllers/test";
import * as statisController from "./controllers/status";

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = Bluebird;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("", express.static("frontend"));

/**
 * Primary app routes.
 */
app.get("/test", testController.index);
app.post("/status", statisController.postStatus);

/**
 * Config graphQL route
 */
app.use("/graphql", graphqlExpress({
    schema: schema
}));
app.use("/graphiql", graphiqlExpress({
    endpointURL: "/graphql"
}));

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());


/**
 * Start Express server.
 */
const server = createServer(app);
server.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

module.exports = app;