import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSidenavModule, MdListModule } from "@angular/material";

import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdListModule,
    
    SidenavRoutingModule
  ],
  declarations: [SidenavComponent]
})
export class SidenavModule { }
