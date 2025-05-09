import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateInputVariableComponent } from './template-input-variable.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateInputVariableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateInputVariableRoutingModule { }
