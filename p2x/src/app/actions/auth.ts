import { Action } from "@ngrx/store";

export const LOAD = "[Auth] Load";
export const LOAD_SUCCESS = "[Auth] Load Success";
export const LOAD_FAILURE = "[Auth] Load Failure";

export const LOGIN_STEP_1 = "[Auth] Login Step 1";
export const LOGIN_STEP_1_SUCCESS = "[Auth] Login Step 1 Success";
export const LOGIN_STEP_1_FAILURE = "[Auth] Login Step 1 Failure";

export const LOGIN_STEP_2 = "[Auth] Login Step 2";
export const LOGIN_STEP_2_SUCCESS = "[Auth] Login Step 2 Success";
export const LOGIN_STEP_2_FAILURE = "[Auth] Login Step 2 Failure";

export class Load implements Action {
    readonly type = LOAD;
}
export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: any) {
    }
}
export class LoadFailure implements Action {
    readonly type = LOAD_FAILURE;
}

// login step 1
export class LoginStep1 implements Action {
    readonly type = LOGIN_STEP_1;
}
export class LoginStep1Success implements Action {
    readonly type = LOGIN_STEP_1_SUCCESS;

    constructor(public payload: any) {
    }
}
export class LoginStep1Failure implements Action {
    readonly type = LOGIN_STEP_1_FAILURE;
}

// login step 2
export class LoginStep2 implements Action {
    readonly type = LOGIN_STEP_2;
}
export class LoginStep2Success implements Action {
    readonly type = LOGIN_STEP_2_SUCCESS;

    constructor(public payload: any) {
    }
}
export class LoginStep2Failure implements Action {
    readonly type = LOGIN_STEP_2_FAILURE;
}

export type Actions = Load
    | LoadSuccess
    | LoadFailure
    | LoginStep1
    | LoginStep1Success
    | LoginStep1Failure
    | LoginStep2
    | LoginStep2Success
    | LoginStep2Failure;
