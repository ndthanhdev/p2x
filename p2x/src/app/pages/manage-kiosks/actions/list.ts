import { Action } from "@ngrx/store";
import { Kiosk } from "../../sidenav/models/Kiosk";

export const LOAD = "[Manage Kiosk] Load";
export const LOAD_SUCCESS = "[Manage Kiosk] Load Success";
export const LOAD_FAILURE = "[Manage Kiosk] Load Failure";

export class Load implements Action {
    readonly type = LOAD;
}


export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: Kiosk[]) {
    }
}


export class LoadFailure implements Action {
    readonly type = LOAD_FAILURE;
}

export type Actions = Load
    | LoadSuccess
    | LoadFailure;