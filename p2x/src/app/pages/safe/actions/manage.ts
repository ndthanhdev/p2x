import { Action } from "@ngrx/store";

export const GENERATE_PASSCODE = "[Safe] Generate Passcode";
export const GENERATE_PASSCODE_SUCCESS = "[Safe] Generate Passcode Success";
export const GENERATE_PASSCODE_FAILURE = "[Safe] Generate Passcode Failure";

export const FORCE_OPEN_SAFE = "[Safe] Force Open Safe";
export const FORCE_OPEN_SAFE_SUCCESS = "[Safe] Force Open Safe Success";
export const FORCE_OPEN_SAFE_FAILURE = "[Safe] Force Open Safe Failure";

// 
export class GeneratePasscode implements Action {
    readonly type = GENERATE_PASSCODE;
    constructor(public payload: { ic: string, no: number, expiredIn: number }) {

    }
}

export class GeneratePasscodeSucess implements Action {
    readonly type = GENERATE_PASSCODE_SUCCESS;
    constructor(public payload: string) { }
}

export class GeneratePasscodeFailure implements Action {
    readonly type = GENERATE_PASSCODE_FAILURE;
}

// 
export class ForceOpenSafe implements Action {
    readonly type = FORCE_OPEN_SAFE;
    constructor(public payload: {
        ic: string,
        no: number,
        code: string
    }) { }
}

export class ForceOpenSafeSuccess implements Action {
    readonly type = FORCE_OPEN_SAFE_SUCCESS;
    constructor(public payload: boolean) { }
}

export class ForceOpenSafeFailure implements Action {
    readonly type = FORCE_OPEN_SAFE_FAILURE;
}

export type Actions = GeneratePasscode
    | GeneratePasscodeSucess
    | GeneratePasscodeFailure
    | ForceOpenSafe
    | ForceOpenSafeSuccess
    | ForceOpenSafeFailure;