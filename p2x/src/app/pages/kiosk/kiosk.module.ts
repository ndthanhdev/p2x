import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCardModule, MdChipsModule} from "@angular/material";
import {KioskRoutingModule} from './kiosk-routing.module';
import {KioskComponent} from './kiosk/kiosk.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    KioskRoutingModule,
    MdChipsModule
  ],
  declarations: [KioskComponent]
})
export class KioskModule {
}
