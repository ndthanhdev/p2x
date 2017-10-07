import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt-nodejs";
import { compareHash } from "../utils/crypt";

export interface IAccount {
    email: string;
    password: string;
    jti: string;
    secret: string;
    isAdmin: boolean;

    comparePassword(candidatePassword: string): Promise<boolean>;
}

export interface IAccountModel extends IAccount, mongoose.Document { }

const accountSchema = new mongoose.Schema({
    email: String,
    password: String,
    jti: String,
    secret: String,
    isAdmin: { type: Boolean, default: false }
});

// middlewares
accountSchema.pre("save", hashPassword);
function hashPassword(next: Function) {
    const account = this;
    if (!account.isModified("password")) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(account.password, salt, undefined, (err: mongoose.Error, hash) => {
            if (err) { return next(err); }
            account.password = hash;
            next();
        });
    });
}

accountSchema.methods.comparePassword = function (candidatePassword: string) {
    return compareHash(candidatePassword, this.password);
};

export const AccountModel: mongoose.Model<IAccountModel> = mongoose.model<IAccountModel>("Account", accountSchema);