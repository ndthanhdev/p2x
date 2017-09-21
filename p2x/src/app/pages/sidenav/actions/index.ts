import { Action } from "@ngrx/store";
import { Kiosk } from "../models/Kiosk";

export const LOAD = "[Sidenav] Load";
export const LOAD_SUCCESS = "[Sidenav] Load Success";
export const LOAD_FAILURE = "[Sidenav] Load Failure";

export class Load implements Action {
    readonly type = LOAD;

    /**
     *
     */
    constructor() {
    }
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