import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as fromReducer from "../reducers"
import { Store } from '@ngrx/store';
import { PageTitleService } from '../../../services/page-title/page-title.service';
import { ActivatedRoute } from '@angular/router';
import * as fromAction from "../actions/overview"

@Component({
  selector: 'p2x-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;

  safeStatus$ = this.store.select(fromReducer.getSafeStatus);

  constructor(private store: Store<fromReducer.State>,
    public _pageTitle: PageTitleService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this._route.parent.params.subscribe(params => {
      this.store.dispatch(new fromAction.Load({ iCNo: params.kid, iDNo: params.sid }));
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
