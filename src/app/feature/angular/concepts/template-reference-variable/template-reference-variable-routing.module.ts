import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateReferenceVariableComponent } from './template-reference-variable.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateReferenceVariableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateReferenceVariableRoutingModule { }
