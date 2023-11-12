import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
{
  path: "forms",
  loadChildren: () => import ('./modules/formularios/formularios.module').then ( m => m.FormulariosModule)
},{
  redirectTo: "template", path: "**"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
