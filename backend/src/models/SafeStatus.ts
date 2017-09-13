import { Document, Schema } from "mongoose";

export interface ISafeStatus {
    IdNo: number;
    Lock: boolean;
    Sensor?: boolean;
}

export const SafeStatusSchema = new Schema({
    IdNo: Number,
    Lock: Boolean,
    Sensor: Boolean
});