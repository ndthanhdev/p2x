import * as create from "../actions/create";

export interface State {
    pending: boolean
}

export const initialState: State = {
    pending: false
}

export function reducer(state = initialState, action: create.Actions): State {
    switch (action.type) {
        case create.CREATE:
            return { ...state, pending: true };
        case create.CREATE_SUCCESS:
            return { ...state, pending: false };
        case create.CREATE_FAILURE:
            return { ...state, pending: false };
        default:
            return state;
    }
}

export const getPending = (state: State) => state.pending;