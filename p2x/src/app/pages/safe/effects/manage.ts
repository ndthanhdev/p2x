import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';
import * as fromActions from "../actions/manage";
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/concatMap';
import "rxjs/add/operator/map";


const generate = gql`
mutation generate($ic:String,$no:Int,$expiredIn:Float){
    generatePasscode(ic:$ic,no:$no,expiredIn:$expiredIn)
}
`;

const forceOpen = gql`
query forceOpenSafe($ic:String,$no:Int, $code:String){
    forceOpenSafe(ic:$ic,no:$no,code:$code)
}
`;


@Injectable()
export class ManageEffects {

    constructor(private actions$: Actions, private apollo: Apollo) { }

    @Effect()
    generatePasscode$ = this.actions$
        .ofType(fromActions.GENERATE_PASSCODE)
        .map((action: fromActions.GeneratePasscode) => action.payload)
        .exhaustMap(payload => this.apollo.mutate({
            mutation: generate,
            variables: {
                ic: payload.ic,
                no: payload.no,
                expiredIn: payload.expiredIn
            }
        }).concatMap(({ data }) => of(new fromActions.GeneratePasscodeSucess(data["generatePasscode"]))
            .catch(error => of(new fromActions.GeneratePasscodeFailure()))));

    @Effect()
    forceOpenSafe$ = this.actions$
        .ofType(fromActions.FORCE_OPEN_SAFE)
        .map((action: fromActions.ForceOpenSafe) => action.payload)
        .exhaustMap(payload => this.apollo.query({
            query: forceOpen,
            variables: {
                ic: payload.ic,
                no: payload.no,
                code: payload.code
            }
        }).concatMap(({ data }) => of(new fromActions.ForceOpenSafeSuccess(data["forceOpenSafe"]))
            .catch(error => of(new fromActions.ForceOpenSafeFailure()))));
}