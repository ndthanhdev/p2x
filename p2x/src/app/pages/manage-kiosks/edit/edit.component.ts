import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageTitleService } from '../../../services/page-title/page-title.service';
import { Store } from '@ngrx/store';
import * as fromActions from "../actions/edit";
import * as fromReducers from "../reducer";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IKiosk } from '../../../models/Kiosk';

@Component({
  selector: 'p2x-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {


  kiosk$ = this._store.select(fromReducers.getEditKiosk);
  kioskSub: Subscription;

  ICNo: string = "";
  Secret: string = "";
  Name: string = "";

  private routeSub: Subscription;
  constructor(
    private _store: Store<fromReducers.State>,
    public pageTitle: PageTitleService,
    private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.pageTitle.title = 'Edit Kiosk';
    this.kioskSub = this.kiosk$.subscribe(kiosk => {
      if (kiosk) {
        this.ICNo = kiosk.ICNo;
        this.Secret = kiosk.Secret;
        this.Name = kiosk.Name;
      }
    });
    this.routeSub = this._route.params.subscribe(params => {
      this._store.dispatch(new fromActions.Load(params.id));
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.kioskSub.unsubscribe();
  }

  onSubmit() {
    this._store.dispatch(new fromActions.Update(<IKiosk>{
      ICNo: this.ICNo,
      Secret: this.Secret,
      Name: this.Name
    }));
  }

  delete() {
    this._store.dispatch(new fromActions.Delete(this.ICNo));
  }
}
