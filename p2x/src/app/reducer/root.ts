import * as fromRouter from "@ngrx/router-store";
import { Action, ActionReducerMap } from "@ngrx/store";
import { Params, RouterStateSnapshot } from "@angular/router";


export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    return { url, queryParams };
  }
}

export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
};

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};