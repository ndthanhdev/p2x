import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "manage-kiosks", loadChildren: "app/pages/manage-kiosks/manage-kiosks.module#ManageKiosksModule" },
  { path: "auth", loadChildren: "app/pages/auth/auth.module#AuthModule" },
  { path: "manage-account", loadChildren: "app/pages/manage-account/manage-account.module#ManageAccountModule" },
  { path: "", loadChildren: "app/pages/sidenav/sidenav.module#SidenavModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
