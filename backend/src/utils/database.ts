import * as  Bluebird from "bluebird";
import mongoose = require("mongoose");

import { AccountModel, IAccount } from "../models/Account";

mongoose.Promise = Bluebird;

export const connectDatabase = (url: string) =>
    mongoose.connect(url, {
        useMongoClient: true
    });

export const disconnectDatabase = async () => await mongoose.disconnect();

