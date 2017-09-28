import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as fromReducer from "../reducers"
import { Store } from '@ngrx/store';
import { PageTitleService } from '../../../services/page-title/page-title.service';
import { ActivatedRoute } from '@angular/router';
import * as fromOverviewAction from "../actions/overview"
import * as fromSafeAction from "../actions/safe";
import { ISafeStatus } from '../../../models/ISafeStatus';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'p2x-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  // safeStatus$ = this.store.select(fromReducer.getSafeStatus);
  idNo: number;

  safeStatus: ISafeStatus;

  kiosk$ = this.store.select(fromReducer.getKiosk);

  safeStatusSub: Subscription;
  routeSub: Subscription;

  constructor(private store: Store<fromReducer.State>,
    public _pageTitle: PageTitleService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this._route.parent.params.subscribe(params => {
      this.store.dispatch(new fromSafeAction.Load(params.kid));
      this.idNo = params.sid;
    });
    this.safeStatusSub = this.kiosk$.subscribe(kiosk => {
      if (kiosk == null || kiosk.LatestStatus == null)
        return;
      let safeStatus = kiosk.LatestStatus.SafeStatuss.filter(value => value.IdNo == this.idNo)[0];
      this.safeStatus = { ...this.safeStatus, ...safeStatus };
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.safeStatusSub.unsubscribe();
  }

}
