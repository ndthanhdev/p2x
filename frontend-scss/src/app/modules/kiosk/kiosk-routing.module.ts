import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KioskListComponent } from './kiosk-list/kiosk-list.component';

const routes: Routes = [
  { path: "", component: KioskListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KioskRoutingModule { }
