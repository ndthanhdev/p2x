import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import gql from 'graphql-tag';
import { Apollo } from "apollo-angular";
import * as fromActions from "../actions/edit";
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/exhaustMap';
import { IKiosk } from "../../../models/Kiosk";
import { Router } from "@angular/router";

const getKiosk = gql`
query getKiosk($ICNo:String){
    Kiosk(ICNo:$ICNo){
      _id
      ICNo
      Name
      IsOnline
    }
  }
`;

const updateKiosk = gql`
mutation updateKiosk($kiosk:KioskInput){
    updateKiosk(data:$kiosk){
      _id
      ICNo
      Name
    }
  }
`;

const deleteKiosk = gql`
mutation deleteKiosk($ICNo:String){
    deleteKiosk(ICNo:$ICNo){
      _id
      ICNo
      Name
      IsOnline
    }
  }
`;

@Injectable()
export class EditEffects {

    constructor(private actions$: Actions, private apollo: Apollo, private router: Router) { }

    @Effect()
    load$ = this.actions$
        .ofType(fromActions.LOAD_KIOSK)
        .map((action: fromActions.Load) => action.payload)
        .exhaustMap(payload => this.apollo.query({
            query: getKiosk,
            variables: {
                ICNo: payload
            },
            fetchPolicy: 'network-only'
        })
            .concatMap(({ data }) => of(new fromActions.LoadSuccess(<IKiosk>data["Kiosk"])))
            .catch(error => of(new fromActions.LoadFailure())));

    @Effect()
    updateKiosk$ = this.actions$
        .ofType(fromActions.UPDATE_KIOSK)
        .map((action: fromActions.Update) => action.payload)
        .exhaustMap(payload => this.apollo.mutate({
            mutation: updateKiosk,
            variables: {
                kiosk: payload
            }
        }).concatMap(({ data }) => of(new fromActions.UpdateSuccess(<IKiosk>data)))
            .catch(error => of(new fromActions.UpdateFailure())));

    @Effect()
    deleteKiosk$ = this.actions$
        .ofType(fromActions.DELETE_KIOSK)
        .map((action: fromActions.Delete) => action.payload)
        .exhaustMap(payload => this.apollo.mutate({
            mutation: deleteKiosk,
            variables: {
                ICNo: payload
            }
        }).concatMap(({ data }) => {
            this.router.navigate(["/manage-kiosks"]);
            return of(new fromActions.DeleteSuccess());
        }).catch(error => of(new fromActions.DeleteFailure())));
}