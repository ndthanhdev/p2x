import * as fromReducer from "../reducers";
import * as fromAction from "../actions/manage";

import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { MdDialog } from "@angular/material";
import { DialogPasscodeComponent } from "../dialog-passcode/dialog-passcode.component";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'p2x-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit, OnDestroy, AfterViewInit {
  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  // context
  kid: string;
  sid: number;

  // model
  expiredIn: number;
  passcode$ = this.store.select(fromReducer.getMangePasscode);

  // sub
  routeSub: Subscription;

  constructor(private store: Store<fromReducer.State>,
    private _route: ActivatedRoute,
    public dialog: MdDialog,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.routeSub = this._route.parent.params.subscribe(params => {
      this.kid = params.kid;
      this.sid = params.sid;

    });    
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
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
}
