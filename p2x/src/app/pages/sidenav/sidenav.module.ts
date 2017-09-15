import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSidenavModule, MdListModule, MdButtonModule } from "@angular/material";
import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule
  ],
  declarations: [SidenavComponent, PageHeaderComponent]
})
export class SidenavModule { }
