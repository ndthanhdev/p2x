import * as fromOverview from "./overview";
import * as fromSafe from "./safe";
import * as fromManage from "./manage";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    safe: fromSafe.State;
    overview: fromOverview.State,
    manage: fromManage.State
};

export const initialState: State = {
    safe: fromSafe.initialState,
    overview: fromOverview.initialState,
    manage: fromManage.initialState
};

export const reducer = {
    safe: fromSafe.reducer,
    overview: fromOverview.reducer,
    manage: fromManage.reducer
};


export const selectSafetate = createFeatureSelector<State>("safe");

// Safe
export const selectSafeSafetate = createSelector(selectSafetate, (sate: State) => sate.safe);
export const getSafeKiosk = createSelector(selectSafeSafetate, fromSafe.getKiosk);

// Overview
export const selectOverviewState = createSelector(
    selectSafetate,
    (sate: State) => sate.overview);
export const getOverviewKiosk = createSelector(selectOverviewState, fromOverview.getKiosk);
export const getOverviewSafeStatus = createSelector(selectOverviewState, fromOverview.getSafeStatus);
export const getOverviewIsOpenSuccess = createSelector(selectOverviewState, fromOverview.getIsOpenSuccess);

// Mange 
export const selectMangeState = createSelector(
    selectSafetate,
    (sate: State) => sate.manage);
export const getMangePasscode = createSelector(selectMangeState, fromManage.getPasscode);
