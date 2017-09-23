import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCardModule, MdChipsModule} from "@angular/material";
import {KioskRoutingModule} from './kiosk-routing.module';
import {KioskComponent} from './kiosk/kiosk.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from "./reducers";
import { KioskEffects } from './effects/index';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    KioskRoutingModule,
    MdChipsModule,
    
    StoreModule.forFeature('kiosk', reducer),
    EffectsModule.forFeature([KioskEffects])
  ],
  declarations: [KioskComponent]
})
export class KioskModule {
}
