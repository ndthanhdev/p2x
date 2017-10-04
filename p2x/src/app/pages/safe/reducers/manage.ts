
import * as fromAction from "../actions/manage";

export interface State {
    passcode: string;
    isForceOpenSafeSuccess: boolean;
};

export const initialState: State = {
    passcode: undefined,
    isForceOpenSafeSuccess: undefined
};

export function reducer(state = initialState, action: fromAction.Actions): State {
    switch (action.type) {
        case fromAction.GENERATE_PASSCODE_SUCCESS:
            return { ...state, passcode: action.payload };
        case fromAction.FORCE_OPEN_SAFE:
            return { ...state, isForceOpenSafeSuccess: undefined };
        case fromAction.FORCE_OPEN_SAFE_SUCCESS:
            return { ...state, isForceOpenSafeSuccess: action.payload };
        case fromAction.FORCE_OPEN_SAFE_FAILURE:
            return { ...state, isForceOpenSafeSuccess: false };
        default:
            return state;
    }
}

export const getPasscode = (state: State) => state.passcode;
export const getIsForceOpenSafeSuccess = (state: State) => state.isForceOpenSafeSuccess;