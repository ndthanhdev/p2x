import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdTabsModule, MdCardModule, MdChipsModule, MdInputModule, MdTableModule, MdSortModule,
  MdButtonModule
} from "@angular/material";

import {SafeRoutingModule} from './safe-routing.module';
import {SafeComponent} from './safe/safe.component';
import {OverviewComponent} from './overview/overview.component';
import {HistoryComponent} from './history/history.component';
import {SharedModule} from "../../shared/shared.module";

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
    MdButtonModule
  ],
  declarations: [SafeComponent, OverviewComponent, HistoryComponent]
})
export class SafeModule {
}
