import * as fromRouterStore from "@ngrx/router-store";
import * as fromRouter from "./router";
import { ActionReducerMap } from "@ngrx/store";

export interface State {
};

export const reducer: ActionReducerMap<State> = {
  router: fromRouterStore.routerReducer,
};