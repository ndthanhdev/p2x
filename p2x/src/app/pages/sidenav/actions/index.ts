import { Action } from "@ngrx/store";
import { Kiosk } from "../../../models/Kiosk";

export const LOAD = "[Sidenav] Load";
export const LOAD_SUCCESS = "[Sidenav] Load Success";
export const LOAD_FAILURE = "[Sidenav] Load Failure";

export const KIOSKS_CHANGED = "[Sidenav] Kiosks Changed";

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

export class KioksChanged implements Action {
    readonly type = KIOSKS_CHANGED;

    constructor(public payload: Kiosk[]) { }
}

export type Actions = Load
    | LoadSuccess
    | LoadFailure
    | KioksChanged;