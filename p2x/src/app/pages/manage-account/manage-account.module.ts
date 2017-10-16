import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAccountRoutingModule } from './manage-account-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    ManageAccountRoutingModule
  ],
  declarations: [CreateAccountComponent, ListComponent]
})
export class ManageAccountModule { }
