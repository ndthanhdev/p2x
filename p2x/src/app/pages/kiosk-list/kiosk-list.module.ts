import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdIconModule, MdButtonModule, MdChipsModule } from "@angular/material";

import { KioskListRoutingModule } from './kiosk-list-routing.module';
import { KioskListComponent } from './kiosk-list/kiosk-list.component';
// import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    KioskListRoutingModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdChipsModule,
    
    // StoreModule.forFeature('sidenav', reducers),
    // EffectsModule.forFeature([SidenavEffects]),
  ],
  declarations: [KioskListComponent],
  providers: []
})
export class KioskListModule {
}
