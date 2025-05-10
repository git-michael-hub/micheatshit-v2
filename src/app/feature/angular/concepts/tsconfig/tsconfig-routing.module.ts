import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptConfigComponent } from '../typescript-config/typescript-config.component';

const routes: Routes = [
  {
    path: '',
    component: TypescriptConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TsconfigRoutingModule { }
