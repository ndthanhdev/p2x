import * as fromOverview from "./overview";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    overview: fromOverview.State
};

export const initialState: State = {
    overview: fromOverview.initialState
};

export const reducer = {
    overview: fromOverview.reducer
};


export const selectSafetate = createFeatureSelector<State>("safe");

// Overview
export const selectOverviewState = createSelector(
    selectSafetate,
    (sate: State) => sate.overview);

export const getKiosk = createSelector(selectOverviewState, fromOverview.getKiosk);
export const getSafeStatus = createSelector(selectOverviewState, fromOverview.getSafeStatus);
