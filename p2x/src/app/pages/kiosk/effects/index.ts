import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import * as fromActions from "../actions";
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/concatMap';
import "rxjs/add/operator/map";

import { IStatus } from "../../../models/Status";

const loadLatest = gql`
query loadlatest($ICNo:String){
    LatestStatus(ICNo:$ICNo){
      ICNo
      createdAt
      SafeStatuss {
        IdNo
        Lock
        Sensor
      }
    }
  }
`;

@Injectable()
export class KioskEffects {

    constructor(private actions$: Actions, private apollo: Apollo) { }

    @Effect()
    loadlol$ = this.actions$
        .ofType(fromActions.LOAD)
        .map((action: fromActions.Load) => action.payload)
        .exhaustMap(payload => this.apollo.query({
            query: loadLatest,
            variables: {
                ICNo: payload
            },
            fetchPolicy: 'network-only'
        }).concatMap(({ data }) => of(new fromActions.LoadSuccess(<IStatus>data["LatestStatus"])))
            .catch(error => of(new fromActions.LoadFailure())));
}