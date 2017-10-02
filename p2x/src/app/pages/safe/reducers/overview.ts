import { IKiosk } from "../../../models/kiosk";
import { ISafeStatus } from "../../../models/ISafeStatus";
import * as fromAction from "../actions/overview";
import { IStatus } from "../../../models/Status";

export interface State {
    kiosk: IKiosk;
    safeStatus: IStatus;
}

export const initialState: State = {
    kiosk: undefined,
    safeStatus: undefined
};

export function reducer(state = initialState, action: fromAction.Actions): State {
    switch (action.type) {
        case fromAction.CHANGED_KIOSK:
            return { ...state, kiosk: action.payload };
        case fromAction.CHANGED_STATUS:
            return { ...state, safeStatus: action.payload };
        default:
            return state;
    }
}

export const getKiosk = (state: State) => state.kiosk;
export const getSafeStatus = (state: State) => state.safeStatus;