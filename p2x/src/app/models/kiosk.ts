import { IStatus } from "./Status";

export interface IKiosk {
    ICNo: string;
    Secret?: string;
    Name: string;
    IsOnline?: boolean;
    SafeStatuss?: IStatus[];
    LatestStatus?: IStatus;
}