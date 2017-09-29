import * as bcrypt from "bcrypt-nodejs";
import * as mongoose from "mongoose";

export interface ISafe {
    no: number;
    passcode: string;
}

export const SafeSchema: mongoose.Schema = new mongoose.Schema({
    no: Number,
    passcode: String
});