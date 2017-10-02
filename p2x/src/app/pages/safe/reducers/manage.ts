
import * as fromAction from "../actions/manage";

export interface State {
    passcode: string;
};

export const initialState: State = {
    passcode: undefined
};

export function reducer(state = initialState, action: fromAction.Actions): State {
    switch (action.type) {
        case fromAction.GENERATE_PASSCODE_SUCCESS:
            return { ...state, passcode: action.payload }
        default:
            return state;
    }
}

export const getPasscode = (state: State) => state.passcode;