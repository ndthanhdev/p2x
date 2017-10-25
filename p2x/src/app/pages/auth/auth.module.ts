import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MdCardModule, MdButtonModule, MdInputModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleService } from '../../services/page-title/page-title.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: [PageTitleService]
})
export class AuthModule { }
