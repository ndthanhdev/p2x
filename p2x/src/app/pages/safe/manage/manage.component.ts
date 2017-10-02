import * as fromReducer from "../reducers";
import * as fromAction from "../actions/manage";

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { MdDialog } from "@angular/material";
import { DialogPasscodeComponent } from "../dialog-passcode/dialog-passcode.component";

@Component({
  selector: 'p2x-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  // context
  kid: string;
  sid: number;

  // model
  expiredIn: number;

  // sub
  routeSub: Subscription;
  passcodeSub: Subscription;

  constructor(private store: Store<fromReducer.State>,
    private _route: ActivatedRoute,
    public dialog: MdDialog) { }

  ngOnInit() {
    this.routeSub = this._route.parent.params.subscribe(params => {
      this.kid = params.kid;
      this.sid = params.sid;

      this.passcodeSub = this.store.select(fromReducer.getMangePasscode).subscribe(passcode => {
        if (passcode) {
          this.dialog.open(DialogPasscodeComponent, {
            data: passcode
          });
        }
      });
    });
  }

  generatePasscode() {
    this.store.dispatch(new fromAction.GeneratePasscode({
      ic: this.kid,
      no: this.sid,
      expiredIn: this.expiredIn
    }));
  }
}
