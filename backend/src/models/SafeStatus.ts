import { Document, Schema } from "mongoose";

export interface ISafeStatus {
    No: number;
    IsOpen: boolean;
    IsOccupied?: boolean;
}

export const SafeStatusSchema = new Schema({
    No: Number,
    IsOpen: Boolean,
    IsOccupied: Boolean
});