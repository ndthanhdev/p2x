import { Action } from "@ngrx/store";

export const GENERATE_PASSCODE = "[Safe] Generate Passcode";
export const GENERATE_PASSCODE_SUCCESS = "[Safe] Generate Passcode Success";
export const GENERATE_PASSCODE_FAILURE = "[Safe] Generate Passcode Failure";

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

export type Actions = GeneratePasscode
    | GeneratePasscodeSucess
    | GeneratePasscodeFailure;