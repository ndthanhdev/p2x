import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdSidenavModule, MdListModule, MdButtonModule, MdIconModule, MdToolbarModule } from "@angular/material";
import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageTitleService } from "../../services/page-title/page-title.service";
import { SharedModule } from "../../shared/shared.module";
import { StoreModule } from '@ngrx/store';
import { reducers } from "./reducers";
import { EffectsModule } from '@ngrx/effects';
import { SidenavEffects } from "./effects";

@NgModule({
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    SharedModule,

    StoreModule.forFeature('sidenav', reducers),
    EffectsModule.forFeature([SidenavEffects]),
  ],
  declarations: [SidenavComponent, PageHeaderComponent],
  providers: [PageTitleService]
})
export class SidenavModule {
}
