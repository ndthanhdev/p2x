import { Action } from '@ngrx/store';
import { RouterState } from '@angular/router';
import { routerReducer } from '@ngrx/router-store';

export interface State {
    router: RouterState;
}

export const reducers = {
    router: routerReducer
}