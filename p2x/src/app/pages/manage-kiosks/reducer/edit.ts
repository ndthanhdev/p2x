import * as fromEditActions from "../actions/edit";
import { Kiosk } from "../../../models/Kiosk";

export interface State {
    kiosk: Kiosk
};

export const initialState: State = {
    kiosk: undefined
};

export function reducers(state: State = initialState, action: fromEditActions.Actions): State {
    switch (action.type) {
        case fromEditActions.LOAD_KIOSK_SUCCESS:
            return { ...state, kiosk: action.payload };
        default:
            return state;
    }
};

export const getKiosk = (state: State) => state.kiosk;