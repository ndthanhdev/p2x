import * as bcrypt from "bcrypt-nodejs";
import * as mongoose from "mongoose";
import { ISafe, SafeSchema, } from "./Safe";



export interface IKiosk {
    ICNo: string;
    Name: string;
    Secret: string;
    IsSensor: boolean;
    IsOnline: boolean;
    Safes: [ISafe];

    compareSecret: (candidateSecret: string, cb: (err: any, isMatch: any) => {}) => void;
}

export interface IKioskModel extends IKiosk, mongoose.Document {

}

const kioskSchema: mongoose.Schema = new mongoose.Schema({
    ICNo: { type: String, unique: true },
    Name: String,
    Secret: String,
    IsSensor: Boolean,
    IsOnline: { type: Boolean, default: false },
    Safes: [SafeSchema]
});

/**
 * Secret hash middleware.
 */

function hashSecret(next: Function) {
    const kiosk = this;
    if (!kiosk.isModified("Secret")) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(kiosk.Secret, salt, undefined, (err: mongoose.Error, hash) => {
            if (err) { return next(err); }
            kiosk.Secret = hash;
            next();
        });
    });
}

kioskSchema.pre("save", hashSecret);
// kioskSchema.pre("update", hashSecret);


kioskSchema.methods.compareSecret = function (candidateSecret: string, cb: (err: any, isMatch: any) => {}) {
    bcrypt.compare(candidateSecret, this.Secret, (err: mongoose.Error, isMatch: boolean) => {
        cb(err, isMatch);
    });
};

export const KioskModel: mongoose.Model<IKioskModel> = mongoose.model<IKioskModel>("Kiosk", kioskSchema);