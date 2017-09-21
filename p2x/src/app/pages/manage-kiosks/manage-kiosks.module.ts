import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageKiosksRoutingModule } from './manage-kiosks-routing.module';
import { CreateComponent } from './create/create.component';
import { MdInputModule, MdCardModule, MdButtonModule } from '@angular/material';
import { PageTitleService } from '../../services/page-title/page-title.service';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { CreateEffects } from './effects/create.effect';
import { ListComponent } from './list/list.component';
import { ListEffects } from './effects/list.effect';

@NgModule({
  imports: [
    CommonModule,
    ManageKiosksRoutingModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    FormsModule,
    SharedModule,

    StoreModule.forFeature('manage-kiosks', reducers),
    EffectsModule.forFeature([CreateEffects,ListEffects]),
  ],
  declarations: [CreateComponent, EditComponent, ListComponent],
  providers: [PageTitleService]
})
export class ManageKiosksModule { }
