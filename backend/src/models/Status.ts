import { Document, Model, model, Schema } from "mongoose";
import { ISafeStatus, SafeStatusSchema } from "./SafeStatus";

export interface IStatus {
    KioskIC: string;
    createdAt: Date;
    SafeStatuss: ISafeStatus[];
}

const StatusSchema = new Schema({
    KioskIC: String,
    createdAt: { type: Date, default: Date.now },
    SafeStatuss: [SafeStatusSchema]
}, { timestamps: true });

export interface IStatusModel extends IStatus, Document { }


export const StatusModel: Model<IStatusModel> = model<IStatusModel>("Status", StatusSchema);