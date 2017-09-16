import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KioskRoutingModule } from './kiosk-routing.module';
import { KioskComponent } from './kiosk/kiosk.component';

@NgModule({
  imports: [
    CommonModule,
    KioskRoutingModule
  ],
  declarations: [KioskComponent]
})
export class KioskModule { }
