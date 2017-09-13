import { Document, Model, model, Schema } from "mongoose";

export interface ISafe {
    No: Number;
}

const SafeSchema: Schema = new Schema({
    No: Number
});

export interface IKiosk {
    ICNo: string;
    Name: string;
    Secret: string;
    IsSensor: boolean;
    Safes: [ISafe];
}

export interface IKioskModel extends IKiosk, Document {

}

const KioskSchema: Schema = new Schema({
    ICNo: { type: String, unique: true },
    Name: String,
    Secret: String,
    IsSensor: Boolean,
    Safes: [SafeSchema]
});

export const KioskModel: Model<IKioskModel> = model<IKioskModel>("Kiosk", KioskSchema);