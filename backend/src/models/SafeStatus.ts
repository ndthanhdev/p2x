import { Document, Schema } from "mongoose";

export interface ISafeStatus {
    No: number;
    IsLock: boolean;
    IsOccupied?: boolean;
}

export const SafeStatusSchema = new Schema({
    No: Number,
    IsLock: Boolean,
    IsOccupied: Boolean
});