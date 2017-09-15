import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KioskListRoutingModule } from './kiosk-list-routing.module';
import { KioskListComponent } from './kiosk-list/kiosk-list.component';

@NgModule({
  imports: [
    CommonModule,
    KioskListRoutingModule
  ],
  declarations: [KioskListComponent]
})
export class KioskListModule { }
