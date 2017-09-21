import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducers from "../reducer";
import * as fromActions from "../actions/list";
import { PageTitleService } from '../../../services/page-title/page-title.service';

@Component({
  selector: 'p2x-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  kiosks$ = this.store.select(fromReducers.getListKiosks);

  constructor(private store: Store<fromReducers.State>,
    public pageTitle: PageTitleService) { }

  ngOnInit() {
    this.pageTitle.title = 'Manage Kiosks';
    this.store.dispatch(new fromActions.Load());
  }

}
