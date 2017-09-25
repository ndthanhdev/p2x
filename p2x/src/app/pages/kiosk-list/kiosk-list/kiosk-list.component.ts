import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageTitleService } from "../../../services/page-title/page-title.service";
import { Store } from '@ngrx/store';
import * as fromReducers from "../../sidenav/reducers";
import * as fromActions from "../../sidenav/actions";
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

const kiosksChanged = gql`
subscription kiosksChanged {
  kiosksChanged{
    _id
    ICNo
    Name
    IsOnline
  }
}
`;

@Component({
  selector: 'p2x-kiosk-list',
  templateUrl: './kiosk-list.component.html',
  styleUrls: ['./kiosk-list.component.scss']
})
export class KioskListComponent implements OnInit, OnDestroy {

  kiosks$ = this.store.select(fromReducers.getKiosks);
  private kiosksChangedSub: Subscription;

  constructor(private store: Store<fromReducers.State>,
    public _pageTitle: PageTitleService,
    private apollo: Apollo) {
  }

  ngOnInit() {
    this._pageTitle.title = 'Kiosk List';
    this.kiosksChangedSub = this.apollo.subscribe({ query: kiosksChanged })
      .subscribe(({ kiosksChanged }) => this.store.dispatch(new fromActions.KioksChanged(kiosksChanged)));
    this.store.dispatch(new fromActions.Load());
  }

  ngOnDestroy(): void {
    this.kiosksChangedSub.unsubscribe();
  }

}
