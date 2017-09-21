import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdIconModule, MdButtonModule } from "@angular/material";

import { KioskListRoutingModule } from './kiosk-list-routing.module';
import { KioskListComponent } from './kiosk-list/kiosk-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from "./reducers";
import { KioskListEffects } from "./effects";

@NgModule({
  imports: [
    CommonModule,
    KioskListRoutingModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,

    StoreModule.forFeature('kiosk-list', reducers),
    EffectsModule.forFeature([KioskListEffects]),
  ],
  declarations: [KioskListComponent],
  providers: []
})
export class KioskListModule {
}
