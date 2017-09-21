import { Component, OnInit, NgZone, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenav } from '@angular/material';
import * as fromReducers from "../reducers";
import * as fromActions from "../actions";
import { Store } from '@ngrx/store';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'p2x-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  kiosks$ = this.store.select(fromReducers.getKiosks);

  constructor(
    private store: Store<fromReducers.State>,
    private _router: Router,
    zone: NgZone) {
    // TODO(josephperrott): Move to CDK breakpoint management once available.
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });

    this.store.dispatch(new fromActions.Load());
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
