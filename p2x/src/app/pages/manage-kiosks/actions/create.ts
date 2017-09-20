import { Action } from '@ngrx/store';
import { KioskModel } from '../model/KioskModel';

export const CREATE = "[Manage Kiosk] Create";
export const CREATE_SUCCESS = "[Manage Kiosk] Create Success";
export const CREATE_FAILURE = "[Manage Kiosk] Create Failure";

export class Create implements Action {
    readonly type = CREATE;

    /**
     *
     */
    constructor(public payload: KioskModel) {
    }
}


export class CreateSuccess implements Action {
    readonly type = CREATE_SUCCESS;
}


export class CreateFailure implements Action {
    readonly type = CREATE_FAILURE;
}

export type Actions = Create
    | CreateSuccess
    | CreateFailure;