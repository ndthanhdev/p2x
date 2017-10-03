import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SafeComponent } from "./safe/safe.component";
import { OverviewComponent } from "./overview/overview.component";
import { HistoryComponent } from "./history/history.component";
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path: "", component: SafeComponent, children: [
      { path: "", redirectTo: "overview", pathMatch: "full" },
      { path: "overview", component: OverviewComponent },
      { path: "history", component: HistoryComponent },
      { path: "manage", component: ManageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafeRoutingModule {
}
