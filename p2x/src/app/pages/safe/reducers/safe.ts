import { IKiosk } from "../../../models/kiosk";
import { ISafeStatus } from "../../../models/ISafeStatus";
import * as fromAction from "../actions/safe";

export interface State {
    kiosk: IKiosk;
}

export const initialState: State = {
    kiosk: undefined
};

export function reducer(state = initialState, action: fromAction.Actions): State {
    switch (action.type) {
        case fromAction.LOAD_SUCCESS:
            return { ...state, kiosk: action.payload };
        default:
            return state;
    }
}

export const getKiosk = (state: State) => state.kiosk;