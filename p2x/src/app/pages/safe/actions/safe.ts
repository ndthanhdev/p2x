import { Action } from '@ngrx/store';
import { IKiosk } from "../../../models/kiosk";

export const LOAD = "[Safe] Load Kiosk";
export const LOAD_SUCCESS = "[Safe] Load Success Kiosk";
export const LOAD_FAILURE = "[Safe] Load Failure Kiosk";

export class Load implements Action {
    readonly type = LOAD;
    constructor(public payload: string) {

    }
}


export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: IKiosk) { }
}


export class LoadFailure implements Action {
    readonly type = LOAD_FAILURE;
}

export type Actions = Load
    | LoadSuccess
    | LoadFailure;