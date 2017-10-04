import { Action } from '@ngrx/store';
import { IKiosk } from "../../../models/kiosk";
import { IStatus } from '../../../models/Status';

export const CHANGED_KIOSK = "[Safe] Changed Kiosk";
export const CHANGED_STATUS = "[Safe] Changed Status";

export const OPEN_SAFE = "[Safe] Open Safe";
export const OPEN_SAFE_SUCCESS = "[Safe] Open Safe Success";
export const OPEN_SAFE_FAILURE = "[Safe] Open Safe Failure";

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

export class OpenSafe implements Action {
    readonly type = OPEN_SAFE;
    constructor(public payload: {
        ic: string,
        no: number,
        passcode: string
    }) { }
}

export class OpenSafeSucess implements Action {
    readonly type = OPEN_SAFE_SUCCESS;
    constructor(public payload: boolean) { }
}

export class OpenSafeFailure implements Action {
    readonly type = OPEN_SAFE_FAILURE;
}

export type Actions = KioskChanged
    | StatusChanged
    | OpenSafe
    | OpenSafeSucess
    | OpenSafeFailure;