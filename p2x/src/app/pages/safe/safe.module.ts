import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdTabsModule, MdCardModule, MdChipsModule, MdInputModule, MdTableModule, MdSortModule,
  MdButtonModule
} from "@angular/material";

import { SafeRoutingModule } from './safe-routing.module';
import { SafeComponent } from './safe/safe.component';
import { OverviewComponent } from './overview/overview.component';
import { HistoryComponent } from './history/history.component';
import { SharedModule } from "../../shared/shared.module";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from "./reducers";
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

    StoreModule.forFeature('safe', reducer),
    EffectsModule.forFeature([OverviewEffects])
  ],
  declarations: [SafeComponent, OverviewComponent, HistoryComponent]
})
export class SafeModule {
}
