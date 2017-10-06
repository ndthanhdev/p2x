import mongoose = require("mongoose");
import * as database from "../utils/database";
import { AccountModel, IAccount } from "../models/Account";
import * as dotenv from "dotenv";

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: "local.env" });

console.log("seeding..");

database.connectDatabase(process.env.MONGODB_URI || process.env.MONGOLAB_URI).then(
    async () => {
        await seedDatabase(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);
        await database.disconnectDatabase();
        console.log("seeded");
    }
);

/**
 * Seed admin account
 */
const seedDatabase = async (adminEmail: string, password: string) => {
    await AccountModel.remove(<IAccount>{ isAdmin: true });
    await AccountModel.remove(<IAccount>{ email: adminEmail });
    await AccountModel.create(<IAccount>{
        email: adminEmail,
        password: password,
        isAdmin: true
    });
};