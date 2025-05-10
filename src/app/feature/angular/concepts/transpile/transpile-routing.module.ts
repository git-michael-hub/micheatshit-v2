import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranspileComponent } from './transpile.component';

const routes: Routes = [
  {
    path: '',
    component: TranspileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranspileRoutingModule { }
