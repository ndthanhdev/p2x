import { Action } from '@ngrx/store';
import { IKiosk } from "../../../models/kiosk";

export const LOAD = "[Safe] Load";
export const LOAD_SUCCESS = "[Safe] Load Success";
export const LOAD_FAILURE = "[Safe] Load Failure";

export class Load implements Action {
    readonly type = LOAD;
    constructor(public payload: { iCNo: string, iDNo: number }) {

    }
}


export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: { kiosk: IKiosk, iDNo: number }) {

    }
}


export class LoadFailure implements Action {
    readonly type = LOAD_FAILURE;
}

export type Actions = Load
    | LoadSuccess
    | LoadFailure;