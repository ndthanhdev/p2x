import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import gql from 'graphql-tag';
import { Apollo } from "apollo-angular";
import * as fromActions from "../actions";
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/exhaustMap';
import { Kiosk } from "../models/Kiosk";

const getKiosks = gql`
query getKiosks{
    Kiosks{
      _id
      ICNo
      Name
    }
  }
`;

@Injectable()
export class SidenavEffects {

    constructor(private actions$: Actions, private apollo: Apollo) { }

    @Effect()
    load$ = this.actions$
        .ofType(fromActions.LOAD)
        .exhaustMap(() => this.apollo.query({
            query: getKiosks,
            fetchPolicy: 'network-only'
        }).concatMap(({ data }) => of(new fromActions.LoadSuccess(<Kiosk[]>data["Kiosks"])))
            .catch(error => of(new fromActions.LoadFailure())));
}