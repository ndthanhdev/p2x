import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAccountRoutingModule } from './manage-account-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ListComponent } from './list/list.component';
import { MdTableModule, MdButtonModule, MdInputModule, MdCardModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ManageAccountRoutingModule,
    MdTableModule,
    MdButtonModule,
    SharedModule,
    FormsModule,
    MdInputModule,
    MdCardModule    
  ],
  declarations: [CreateAccountComponent, ListComponent]
})
export class ManageAccountModule { }
