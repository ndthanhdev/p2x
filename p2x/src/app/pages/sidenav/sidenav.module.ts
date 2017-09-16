import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdSidenavModule, MdListModule, MdButtonModule, MdIconModule, MdToolbarModule} from "@angular/material";
import {SidenavRoutingModule} from './sidenav-routing.module';
import {SidenavComponent} from './sidenav/sidenav.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {PageTitleService} from "../../services/page-title/page-title.service";

@NgModule({
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule
  ],
  declarations: [SidenavComponent, PageHeaderComponent],
  providers: [PageTitleService]
})
export class SidenavModule {
}
