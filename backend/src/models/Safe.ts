import * as bcrypt from "bcrypt-nodejs";
import * as mongoose from "mongoose";

export interface ISafe {
    idNo: number;
    passcode: string;
}

export const SafeSchema: mongoose.Schema = new mongoose.Schema({
    idNo: Number,
    passcode: String
});