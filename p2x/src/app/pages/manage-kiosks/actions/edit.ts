import { Action } from "@ngrx/store";
import { Kiosk } from "../../sidenav/models/Kiosk";

export const LOAD_KIOSK = "[Manage Kiosk] Load Kiosk";
export const LOAD_KIOSK_SUCCESS = "[Manage Kiosk] Load Kiosk Success";
export const LOAD_KIOSK_FAILURE = "[Manage Kiosk] Load Kiosk Failure";

export class Load implements Action {
    readonly type = LOAD_KIOSK;
    
    constructor(public payload: string) {
    }
}

export class LoadSuccess implements Action {
    readonly type = LOAD_KIOSK_SUCCESS;
    constructor(public payload: Kiosk) {
    }
}

export class LoadFailure implements Action {
    readonly type = LOAD_KIOSK_FAILURE;
}

export type Actions = Load
    | LoadSuccess
    | LoadFailure;