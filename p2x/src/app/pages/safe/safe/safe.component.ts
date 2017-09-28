import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageTitleService } from "../../../services/page-title/page-title.service";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import * as fromReducer from "../reducers"
import * as fromSafeAction from "../actions/safe";

@Component({
  selector: 'p2x-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.scss']
})
export class SafeComponent implements OnInit, OnDestroy {

  kiosk$ = this.store.select(fromReducer.getKiosk);

  private routeSub: Subscription;
  private kioskSub: Subscription;


  constructor(private store: Store<fromReducer.State>,
    public _pageTitle: PageTitleService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this._route.params.subscribe(params => {
      this.store.dispatch(new fromSafeAction.Load(params.kid));
      this.kioskSub = this.kiosk$.subscribe(kiosk => {
        if (kiosk == null || kiosk.LatestStatus == null)
          return;
        this._pageTitle.title = kiosk.Name;
      });
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.kioskSub.unsubscribe();
  }
}
