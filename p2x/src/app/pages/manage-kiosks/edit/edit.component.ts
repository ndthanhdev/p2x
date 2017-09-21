import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageTitleService } from '../../../services/page-title/page-title.service';
import { Store } from '@ngrx/store';
import * as fromActions from "../actions/edit";
import * as fromReducers from "../reducer";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'p2x-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {


  kiosk$ = this._store.select(fromReducers.getEditKiosk);
  
  private routeSub: Subscription;
  constructor(
    private _store: Store<fromReducers.State>,
    public pageTitle: PageTitleService,
    private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.pageTitle.title = 'Edit Kiosk';

    this.routeSub = this._route.params.subscribe(params => {
      this._store.dispatch(new fromActions.Load(params.id));
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}
