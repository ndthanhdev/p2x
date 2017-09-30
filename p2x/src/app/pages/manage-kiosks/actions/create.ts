import { Action } from '@ngrx/store';
import { IKiosk } from '../../../models/Kiosk';

export const CREATE = "[Manage Kiosk] Create";
export const CREATE_SUCCESS = "[Manage Kiosk] Create Success";
export const CREATE_FAILURE = "[Manage Kiosk] Create Failure";

export class Create implements Action {
    readonly type = CREATE;

    /**
     *
     */
    constructor(public payload: IKiosk) {
    }
}


export class CreateSuccess implements Action {
    readonly type = CREATE_SUCCESS;
}


export class CreateFailure implements Action {
    readonly type = CREATE_FAILURE;
    /**
     *
     */
    constructor(public payload: any) {
    }
}

export type Actions = Create
    | CreateSuccess
    | CreateFailure;