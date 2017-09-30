import { IStatus } from "./Status";

export interface IKiosk {
    IC: string;
    Secret?: string;
    Name?: string;
    IsOnline?: boolean;
    SafeStatuss?: IStatus[];
    LatestStatus?: IStatus;
}