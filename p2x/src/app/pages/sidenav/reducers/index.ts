import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Kiosk } from "../../../models/Kiosk";
import * as fromActions from "../actions";

export interface State {
    kiosks: Kiosk[]
};

export const initialState: State = {
    kiosks: []
};

export function reducers(state: State = initialState, action: fromActions.Actions): State {
    switch (action.type) {
        case fromActions.LOAD_SUCCESS:
            return { ...state, kiosks: action.payload };
        case fromActions.KIOSKS_CHANGED:
            return { ...state, kiosks: action.payload };
        default:
            return state;
    }
};

export const selectSidenavState = createFeatureSelector<State>("sidenav");

export const getKiosks = createSelector(selectSidenavState, (state: State) => state.kiosks);