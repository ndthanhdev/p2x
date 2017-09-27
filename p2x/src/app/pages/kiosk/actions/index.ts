import { Action } from "@ngrx/store";
import { IKiosk } from "../../../models/Kiosk";
import { IStatus } from "../../../models/Status";

export const LOAD = "[Kiosk] Load";
export const LOAD_SUCCESS = "[Kiosk] Load Success";
export const LOAD_FAILURE = "[Kiosk] Load Failure";

export const ADDED_STATUS = "[Kiosk] Added Status";
export const CHANGED_KIOSK = "[Kiosk] Changed Kiosk";

export class Load implements Action {
    readonly type = LOAD;

    constructor(public payload: string) {
    }
}


export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: IKiosk) {
    }
}


export class LoadFailure implements Action {
    readonly type = LOAD_FAILURE;
}

export class AddedStatus implements Action {
    readonly type = ADDED_STATUS;
    constructor(public payload: IStatus) {
    }
}

export class ChangedKiosk implements Action {
    readonly type = CHANGED_KIOSK;
    constructor(public payload: IKiosk) {
    }
}

export type Actions = Load
    | LoadSuccess
    | LoadFailure
    | AddedStatus;