import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as CreateActions from "../actions/create";


@Injectable()
export class CreateEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    create$ = this.actions$
        .ofType(CreateActions.CREATE)
        .map(action => new CreateActions.CreateSuccess());
    // .exhaustMap(action => Promise.resolve(new CreateActions.CreateSuccess()));
};