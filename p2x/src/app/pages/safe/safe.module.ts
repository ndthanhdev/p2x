import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdTabsModule, MdCardModule} from "@angular/material";

import {SafeRoutingModule} from './safe-routing.module';
import {SafeComponent} from './safe/safe.component';
import {OverviewComponent} from './overview/overview.component';
import {HistoryComponent} from './history/history.component';

@NgModule({
  imports: [
    CommonModule,
    SafeRoutingModule,
    MdTabsModule,
    MdCardModule
  ],
  declarations: [SafeComponent, OverviewComponent, HistoryComponent]
})
export class SafeModule {
}
