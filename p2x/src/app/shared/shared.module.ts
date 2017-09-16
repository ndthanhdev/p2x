import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MdToolbarModule, MdButtonModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule

  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class SharedModule { }
