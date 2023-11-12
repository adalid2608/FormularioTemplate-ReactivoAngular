import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [{
    path: "template",
    component: TemplateComponent
},{
  redirectTo: "template", path: "**"
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
