import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MdToolbarModule, MdButtonModule } from "@angular/material";
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    RouterModule
  ],
  declarations: [NavbarComponent, FooterComponent],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedModule { }
