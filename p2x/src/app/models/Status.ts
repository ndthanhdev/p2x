import { ISafeStatus } from "./ISafeStatus";

export interface IStatus {
    ICNo: string;
    createdAt: Date;
    SafeStatuss: ISafeStatus[];
}