import * as fromOverview from "./overview";
import * as fromSafe from "./safe";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    safe: fromSafe.State;
    overview: fromOverview.State
};

export const initialState: State = {
    safe: fromSafe.initialState,
    overview: fromOverview.initialState
};

export const reducer = {
    safe: fromSafe.reducer,
    overview: fromOverview.reducer
};


export const selectSafetate = createFeatureSelector<State>("safe");

// Safe
export const selectSafeSafetate = createSelector(selectSafetate, (sate: State) => sate.safe);
export const getKiosk = createSelector(selectSafeSafetate, fromSafe.getKiosk);

// Overview
export const selectOverviewState = createSelector(
    selectSafetate,
    (sate: State) => sate.overview);
export const getSafeStatus = createSelector(selectOverviewState, fromOverview.getSafeStatus);
