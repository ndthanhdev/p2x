import * as fromCreate from "./create";
import * as fromList from "./list";
import * as fromEdit from "./edit";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State {
    create: fromCreate.State,
    list: fromList.State,
    edit: fromEdit.State
};

export const initialState: State = {
    create: fromCreate.initialState,
    list: fromList.initialState,
    edit: fromEdit.initialState
};

export const reducers = {
    create: fromCreate.reducer,
    list: fromList.reducers,
    edit: fromEdit.reducers
};

export const selectManageKiosksState = createFeatureSelector<State>('manage-kiosks');


// Create
export const selectCreateState = createSelector(
    selectManageKiosksState,
    (state: State) => state.create
);
export const getCreatePending = createSelector(selectCreateState, fromCreate.getPending);

// List
export const selectListState = createSelector(
    selectManageKiosksState,
    (state: State) => state.list
);

export const getListKiosks = createSelector(selectListState, fromList.getKiosks);

// Edit
export const selectEditState = createSelector(
    selectManageKiosksState,
    (state: State) => state.edit
);

export const getEditKiosk = createSelector(selectEditState, fromEdit.getKiosk);
