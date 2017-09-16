import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SidenavComponent} from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: "", component: SidenavComponent, children: [
    {path: "", redirectTo: "kiosk-list", pathMatch: "full"},
    {path: "kiosk-list", loadChildren: "app/pages/kiosk-list/kiosk-list.module#KioskListModule"},
    {path: "kiosk", loadChildren: "app/pages/kiosk/kiosk.module#KioskModule"}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule {
}
