import { Action } from "@ngrx/store";
import { Kiosk } from "../../../models/Kiosk";
import { IStatus } from "../../../models/Status";

export const LOAD = "[Kiosk] Load";
export const LOAD_SUCCESS = "[Kiosk] Load Success";
export const LOAD_FAILURE = "[Kiosk] Load Failure";

export const ADDED_STATUS = "[Kiosk] Added Status";

export class Load implements Action {
    readonly type = LOAD;

    constructor(public payload: string) {
    }
}


export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: IStatus) {
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

export type Actions = Load
    | LoadSuccess
    | LoadFailure
    | AddedStatus;