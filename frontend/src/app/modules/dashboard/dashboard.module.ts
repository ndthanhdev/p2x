import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdToolbarModule, MdExpansionModule, MdIconModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KioskComponent } from './kiosk/kiosk.component';
import { SafeComponent } from './safe/safe.component';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    FlexLayoutModule,
    MdExpansionModule,
    MdIconModule,
    
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, KioskComponent, SafeComponent]
})
export class DashboardModule { }
