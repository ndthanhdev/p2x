import { IStatus } from "../../../models/Status";
import * as fromAction from "../actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    status: IStatus
};

export const initialState: State = {
    status: undefined
};

export function reducer(state: State = initialState, action: fromAction.Actions): State {
    switch (action.type) {
        case fromAction.LOAD_SUCCESS:
            return { ...state, status: action.payload };
        default:
            return state;
    }
};

export const selectKioskState = createFeatureSelector<State>("kiosk");

export const getStatus = createSelector(selectKioskState, (state: State) => state.status);