import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MdToolbarModule, MdButtonModule } from "@angular/material";
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { SvgViewerComponent } from './svg-viewer/svg-viewer.component';
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [NavbarComponent, FooterComponent, SvgViewerComponent],
  exports: [NavbarComponent, FooterComponent, SvgViewerComponent]
})
export class SharedModule { }
