import { Action } from "@ngrx/store";
import { IKiosk } from "../../../models/Kiosk";

export const LOAD_KIOSK = "[Manage Kiosk] Load Kiosk";
export const LOAD_KIOSK_SUCCESS = "[Manage Kiosk] Load Kiosk Success";
export const LOAD_KIOSK_FAILURE = "[Manage Kiosk] Load Kiosk Failure";

export const UPDATE_KIOSK = "[Manage Kiosk] Update Kiosk";
export const UPDATE_KIOSK_SUCCESS = "[Manage Kiosk] Update Kiosk Success";
export const UPDATE_KIOSK_FAILURE = "[Manage Kiosk] Update Kiosk Failure";

export const DELETE_KIOSK = "[Manage Kiosk] Delete Kiosk";
export const DELETE_KIOSK_SUCCESS = "[Manage Kiosk] Delete Kiosk Success";
export const DELETE_KIOSK_FAILURE = "[Manage Kiosk] Delete Kiosk Failure";

// Load
export class Load implements Action {
    readonly type = LOAD_KIOSK;

    constructor(public payload: string) {
    }
}

export class LoadSuccess implements Action {
    readonly type = LOAD_KIOSK_SUCCESS;
    constructor(public payload: IKiosk) {
    }
}

export class LoadFailure implements Action {
    readonly type = LOAD_KIOSK_FAILURE;
}

// Update
export class Update implements Action {
    readonly type = UPDATE_KIOSK;

    constructor(public payload: IKiosk) {
    }
}

export class UpdateSuccess implements Action {
    readonly type = UPDATE_KIOSK_SUCCESS;
    constructor(public payload: IKiosk) {
    }
}

export class UpdateFailure implements Action {
    readonly type = UPDATE_KIOSK_FAILURE;
}

// Delete
export class Delete implements Action {
    readonly type = DELETE_KIOSK;

    constructor(public payload: string) {
    }
}

export class DeleteSuccess implements Action {
    readonly type = DELETE_KIOSK_SUCCESS;
}

export class DeleteFailure implements Action {
    readonly type = DELETE_KIOSK_FAILURE;
}

export type Actions = Load
    | LoadSuccess
    | LoadFailure
    | Update
    | UpdateSuccess
    | UpdateFailure
    | Delete
    | DeleteSuccess
    | DeleteFailure;