import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../services/page-title/page-title.service';
import { Store } from '@ngrx/store';
import * as fromManageKiosks from "../reducer";
import * as fromCreateActions from "../actions/create";
import { IKiosk } from '../../../models/Kiosk';

@Component({
  selector: 'p2x-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  pending$ = this.store.select(fromManageKiosks.getCreatePending);
  model = <IKiosk>{
    IC: "",
    Secret: "",
    Name: ""
  };

  constructor(public _pageTitle: PageTitleService, private store: Store<fromManageKiosks.State>) { }

  ngOnInit() {
    this._pageTitle.title = 'Create Kiosk';
  }

  onSubmit() {
    this.store.dispatch(new fromCreateActions.Create(this.model));
  }

}

