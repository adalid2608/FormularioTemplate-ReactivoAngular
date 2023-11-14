import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {
    path: "template",
    component: TemplateComponent
  },
  {
    path: "reactive",
    component: ReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
