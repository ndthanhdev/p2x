import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import gql from 'graphql-tag';
import { Apollo } from "apollo-angular";
import * as fromActions from "../actions/edit";
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/exhaustMap';
import { Kiosk } from "../../sidenav/models/Kiosk";

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

@Injectable()
export class EditEffects {

    constructor(private actions$: Actions, private apollo: Apollo) { }

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
        }).concatMap(({ data }) => of(new fromActions.LoadSuccess(<Kiosk>data["Kiosk"])))
            .catch(error => of(new fromActions.LoadFailure())));
}