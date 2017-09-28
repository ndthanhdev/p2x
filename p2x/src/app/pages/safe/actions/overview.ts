import { Action } from '@ngrx/store';
import { IKiosk } from "../../../models/kiosk";
import { IStatus } from '../../../models/Status';

export const CHANGED_KIOSK = "[Safe] Changed Kiosk";
export const CHANGED_STATUS = "[Safe] Changed Status";

export class KioskChanged implements Action {
    readonly type = CHANGED_KIOSK;
    constructor(public payload: IKiosk) {

    }
}

export class StatusChanged implements Action {
    readonly type = CHANGED_STATUS;
    constructor(public payload: IStatus) {

    }
}

export type Actions = KioskChanged
    | StatusChanged;