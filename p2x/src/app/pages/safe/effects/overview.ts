import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import * as fromAction from "../actions/overview";
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/concatMap';
import "rxjs/add/operator/map";

import { IKiosk } from '../../../models/kiosk';

const openSafe = gql`
query openSafe($ic:String,$no:Int,$passcode:String){
    openSafe(ic:$ic,no:$no,passcode:$passcode)
}
`;

@Injectable()
export class OverviewEffects {

    constructor(private actions$: Actions, private apollo: Apollo) { }

    @Effect()
    openSafe$ = this.actions$
        .ofType(fromAction.OPEN_SAFE)
        .map((action: fromAction.OpenSafe) => action.payload)
        .exhaustMap(payload => this.apollo.query({
            query: openSafe,
            variables: {
                ic: payload.ic,
                no: payload.no,
                passcode: payload.passcode
            },
            fetchPolicy: 'network-only'
        }).concatMap(({ data }) => of(new fromAction.OpenSafeSucess(<boolean>data["openSafe"])))
            .catch(error => of(new fromAction.OpenSafeFailure())));
}