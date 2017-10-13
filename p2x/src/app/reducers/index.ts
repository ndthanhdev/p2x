import * as fromRouterStore from "@ngrx/router-store";
import * as fromRouter from "./router";
import * as fromAuth from "./auth";
import { ActionReducerMap } from "@ngrx/store";

export interface State {
  router: fromRouterStore.RouterReducerState;  
  auth: fromAuth.State;
};

export const initialState: State = {
  router: undefined,  
  auth: fromAuth.initialState,
}

export const reducer: ActionReducerMap<State> = {
  router: fromRouterStore.routerReducer,
  auth: fromAuth.reducer
};