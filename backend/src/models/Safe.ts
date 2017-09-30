import * as bcrypt from "bcrypt-nodejs";
import * as mongoose from "mongoose";
import { compareHash } from "../utils";

export interface ISafe {
    no: number;
    passcode: string;

    comparePasscode(candidatePasscode: string): Promise<boolean>;

}

export const SafeSchema: mongoose.Schema = new mongoose.Schema({
    no: Number,
    passcode: String
});

// Safe has middleware
SafeSchema.pre("save", hashPasscode);

function hashPasscode(next: Function) {
    const safe = this;
    if (!safe.isModified("passcode")) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(safe.passcode, salt, undefined, (err: mongoose.Error, hash) => {
            if (err) { return next(err); }
            safe.passcode = hash;
            next();
        });
    });
}

SafeSchema.methods.comparePasscode = function (candidatePasscode: string) {
    return compareHash(candidatePasscode, this.passcode);
};