import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdCardModule} from "@angular/material";

import {KioskListRoutingModule} from './kiosk-list-routing.module';
import {KioskListComponent} from './kiosk-list/kiosk-list.component';

@NgModule({
  imports: [
    CommonModule,
    KioskListRoutingModule,
    MdCardModule
  ],
  declarations: [KioskListComponent],
  providers: []
})
export class KioskListModule {
}
