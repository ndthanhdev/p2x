import * as fromReducer from "../reducers";
import * as fromAction from "../actions/manage";

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { MdDialog, MdSnackBar } from "@angular/material";
import { DialogPasscodeComponent } from "../dialog-passcode/dialog-passcode.component";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'p2x-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit, OnDestroy {

  // context
  kid: string;
  sid: number;

  // model
  expiredIn: number;
  code: string;
  passcode$ = this.store.select(fromReducer.getMangePasscode);
  isForceOpenSuccess$ = this.store.select(fromReducer.getMangeIsForceOpenSafeSuccess);

  // sub
  routeSub: Subscription;
  isForceOpenSuccessSub: Subscription;

  constructor(private store: Store<fromReducer.State>,
    private _route: ActivatedRoute,
    public dialog: MdDialog,
    public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.routeSub = this._route.parent.parent.params.subscribe(params => {
      this.kid = params.kid;
      this.sid = params.sid;
    });
    this.isForceOpenSuccessSub = this.isForceOpenSuccess$
      .skip(1)
      .skipWhile(value => value == null)
      .subscribe(isForceopenSuccess => {
        this.snackBar.open(`Force open safe ${isForceopenSuccess ? 'success' : 'failure'}.`, undefined, {
          duration: 3000
        });
      });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.isForceOpenSuccessSub.unsubscribe();
  }
  generatePasscode() {
    this.store.dispatch(new fromAction.GeneratePasscode({
      ic: this.kid,
      no: this.sid,
      expiredIn: this.expiredIn
    }));
    this.openDialog(this.passcode$);
  }

  openDialog(passcode$: Observable<string>) {
    this.dialog.open(DialogPasscodeComponent, {
      data: { passcode$ }
    });
  }

  sendCode() {
    this.snackBar.open(`Code is sent to your email.`, undefined, {
      duration: 3000
    });
  }

  forceOpenSafe(code: string) {
    this.store.dispatch(new fromAction.ForceOpenSafe({
      ic: this.kid,
      no: this.sid,
      code: code
    }));
  }
}
