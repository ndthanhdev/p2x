import * as fromCreate from "./create";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    create: fromCreate.State
};

export const initialState: State = {
    create: fromCreate.initialState
};

export const reducers = {
    create: fromCreate.reducer
};

export const selectManageKiosksState = createFeatureSelector<State>('manage-kiosks');


export const selectCreateState = createSelector(
    selectManageKiosksState,
    (state: State) => state.create
);
export const getCreatePending = createSelector(selectCreateState, fromCreate.getPending);
