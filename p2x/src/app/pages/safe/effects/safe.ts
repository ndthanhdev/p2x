import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import * as fromActions from "../actions/safe";
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/concatMap';
import "rxjs/add/operator/map";

import { IKiosk } from '../../../models/kiosk';

const load = gql`
query load($ICNo:String){
    Kiosk(ICNo:$ICNo){
        ICNo
        Name
        IsOnline
        LatestStatus{
          ICNo
          createdAt
          SafeStatuss {
            IdNo
            Lock
            Sensor        
          }
        }    
    }
  }
`;

@Injectable()
export class SafeEffects {

    constructor(private actions$: Actions, private apollo: Apollo) { }

    @Effect()
    load$ = this.actions$
        .ofType(fromActions.LOAD)
        .map((action: fromActions.Load) => action.payload)
        .exhaustMap(payload => this.apollo.query({
            query: load,
            variables: {
                ICNo: payload
            },
            fetchPolicy: 'network-only'
        }).concatMap(({ data }) => of(new fromActions.LoadSuccess(<IKiosk>data["Kiosk"])))
            .catch(error => of(new fromActions.LoadFailure())));
}