import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "manage-kiosks", loadChildren: "app/pages/manage-kiosks/manage-kiosks.module#ManageKiosksModule" },  
  { path: "", loadChildren: "app/pages/sidenav/sidenav.module#SidenavModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
