import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KioskRoutingModule } from './kiosk-routing.module';
import { KioskListComponent } from './kiosk-list/kiosk-list.component';

@NgModule({
  imports: [
    CommonModule,
    KioskRoutingModule
  ],
  declarations: [KioskListComponent],
  exports: [KioskListComponent]
})
export class KioskModule { }
