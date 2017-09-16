import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SafeComponent} from "./safe/safe.component";

const routes: Routes = [
  {path: ":kid/:sid", component: SafeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafeRoutingModule {
}
