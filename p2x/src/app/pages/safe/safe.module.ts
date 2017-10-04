import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdTabsModule, MdCardModule, MdChipsModule, MdInputModule, MdTableModule, MdSortModule,
  MdButtonModule, MdDialogModule, MdSnackBarModule
} from "@angular/material";

import { SafeRoutingModule } from './safe-routing.module';
import { SafeComponent } from './safe/safe.component';
import { OverviewComponent } from './overview/overview.component';
import { HistoryComponent } from './history/history.component';
import { SharedModule } from "../../shared/shared.module";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from "./reducers";
import { SafeEffects } from './effects/safe';
import { FormsModule } from '@angular/forms';
import { ManageComponent } from './manage/manage.component';
import { ManageEffects } from './effects/manage';
import { DialogPasscodeComponent } from './dialog-passcode/dialog-passcode.component';
import { OverviewEffects } from './effects/overview';

@NgModule({
  imports: [
    CommonModule,
    SafeRoutingModule,
    MdTabsModule,
    MdCardModule,
    MdChipsModule,
    MdInputModule,
    MdTableModule,
    MdSortModule,
    SharedModule,
    MdButtonModule,
    FormsModule,
    MdDialogModule,
    MdSnackBarModule,

    StoreModule.forFeature('safe', reducer),
    EffectsModule.forFeature([SafeEffects, ManageEffects, OverviewEffects])
  ],
  declarations: [SafeComponent, OverviewComponent, HistoryComponent, ManageComponent, DialogPasscodeComponent],
  entryComponents: [DialogPasscodeComponent]
})
export class SafeModule {
}
