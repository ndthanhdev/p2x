import { ISafeStatus } from "./ISafeStatus";

export interface IStatus {
    KioskIC: string;
    createdAt: Date;
    SafeStatuss: ISafeStatus[];
}