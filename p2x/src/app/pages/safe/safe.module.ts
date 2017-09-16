import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeRoutingModule } from './safe-routing.module';
import { SafeComponent } from './safe/safe.component';

@NgModule({
  imports: [
    CommonModule,
    SafeRoutingModule
  ],
  declarations: [SafeComponent]
})
export class SafeModule { }
