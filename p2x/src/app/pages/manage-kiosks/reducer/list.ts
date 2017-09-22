import * as fromListActions from "../actions/list";
import { Kiosk } from "../../../models/Kiosk";

export interface State {
    kiosks: Kiosk[]
};

export const initialState: State = {
    kiosks: []
};

export function reducers(state: State = initialState, action: fromListActions.Actions): State {
    switch (action.type) {
        case fromListActions.LOAD_SUCCESS:
            return { ...state, kiosks: action.payload };
        default:
            return state;
    }
};

export const getKiosks = (state: State) => state.kiosks;