import { Document, Model, model, Schema } from "mongoose";
import { ISafeStatus, SafeStatusSchema } from "./SafeStatus";

export interface IStatus {
    KioskICNo: string;
    SafeStatuss: ISafeStatus[];
}

const StatusSchema = new Schema({
    KioskICNo: String,
    SafeStatuss: [SafeStatusSchema]
});

export interface IStatusModel extends IStatus, Document { }


export const StatusModel: Model<IStatusModel> = model<IStatusModel>("Status", StatusSchema);