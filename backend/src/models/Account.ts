import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt-nodejs";
import { compareHash } from "../utils/crypt";

export interface IAccount {
    email: string;
    password: string;
    jti: string;

    comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IAccountModel extends IAccount, mongoose.Document { }

const accountSchema = new mongoose.Schema({
    email: String,
    password: String,
    jti: String
});

// middlewares
accountSchema.pre("save", hashPassword);
function hashPassword(next: Function) {
    const kiosk = this;
    if (!kiosk.isModified("password")) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(kiosk.password, salt, undefined, (err: mongoose.Error, hash) => {
            if (err) { return next(err); }
            kiosk.password = hash;
            next();
        });
    });
}

accountSchema.methods.comparePassword = function (candidatePassword: string) {
    return compareHash(candidatePassword, this.password);
};

export const AccountModel: mongoose.Model<IAccountModel> = mongoose.model<IAccountModel>("Account", accountSchema);