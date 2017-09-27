import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageTitleService } from "../../../services/page-title/page-title.service";
import * as fromReducers from "../reducers";
import * as fromActions from "../actions";
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { IStatus } from '../../../models/Status';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { IKiosk } from '../../../models/kiosk';

const statusAdded = gql`
subscription statusAdded($ICNo:String){
  statusAdded(ICNo:$ICNo){
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

@Component({
  selector: 'p2x-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.scss']
})
export class KioskComponent implements OnInit, OnDestroy {

  status$ = this.store.select(fromReducers.getStatus);
  status: IStatus = undefined;

  kiosk$ = this.store.select(fromReducers.getKiosk);
  kiosk: IKiosk = undefined;

  private routeSub: Subscription;
  private statusSub: Subscription;
  private kioskSub: Subscription;
  private statusAddedSub: Subscription;

  constructor(private store: Store<fromReducers.State>,
    public _pageTitle: PageTitleService,
    private _route: ActivatedRoute,
    private apollo: Apollo) { }

  ngOnInit() {
    this._pageTitle.title = "Safe";
    this.routeSub = this._route.params.subscribe(params => {
      this.statusAddedSub = this.apollo.subscribe({ query: statusAdded, variables: { ICNo: params.id } })
        .subscribe(({ statusAdded }) => this.store.dispatch(new fromActions.AddedStatus(statusAdded)));
      this.store.dispatch(new fromActions.Load(params.id));

    });
    this.statusSub = this.status$.subscribe(status => this.status = status);
    this.kioskSub = this.kiosk$.subscribe(kiosk => {
      this._pageTitle.title = kiosk.Name;
      this.kiosk = kiosk;
    });
    this.kiosk
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.statusSub.unsubscribe();
    this.statusAddedSub.unsubscribe();
  }

}
