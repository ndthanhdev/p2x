import * as fromRouter from "@ngrx/router-store";
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

export type State = fromRouter.RouterReducerState<RouterStateUrl>;