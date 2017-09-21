import { Component, OnInit } from '@angular/core';
import { PageTitleService } from "../../../services/page-title/page-title.service";
import { Store } from '@ngrx/store';
import * as fromReducers from "../reducers";
import * as fromActions from "../actions";

@Component({
  selector: 'p2x-kiosk-list',
  templateUrl: './kiosk-list.component.html',
  styleUrls: ['./kiosk-list.component.scss']
})
export class KioskListComponent implements OnInit {

  kiosks$ = this.store.select(fromReducers.getKiosks);

  constructor(private store: Store<fromReducers.State>,
    public _pageTitle: PageTitleService) {
  }

  ngOnInit() {
    this._pageTitle.title = 'Kiosk List';
    this.store.dispatch(new fromActions.Load());
  }
}
