import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concatMap';
import * as CreateActions from "../actions/create";
import { Apollo } from "apollo-angular";
import gql from 'graphql-tag';
import { Router } from "@angular/router";

const createKiosk = gql`
mutation createKiosk($kiosk:KioskInput){
    addKiosk(data:$kiosk){
      _id
      IC
      Name
    }
  }
`;

@Injectable()
export class CreateEffects {

    constructor(private actions$: Actions, private apollo: Apollo, private router: Router) { }

    @Effect()
    create$ = this.actions$
        .ofType(CreateActions.CREATE)
        .map((action: CreateActions.Create) => action.payload)
        .exhaustMap(payload => this.apollo.mutate({
            mutation: createKiosk,
            variables: {
                kiosk: payload
            }
        }).concatMap(({ data }) => {
            this.router.navigate(["/manage-kiosks"]);
            return of(new CreateActions.CreateSuccess())
        }).catch(error => of(new CreateActions.CreateFailure(error))));

    @Effect({ dispatch: false })
    failure$ = this.actions$.ofType(CreateActions.CREATE_FAILURE)
        .do((action: CreateActions.CreateFailure) => console.log("failure"));
};