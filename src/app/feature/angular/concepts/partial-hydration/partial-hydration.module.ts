import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PartialHydrationComponent } from './partial-hydration.component';

const routes: Routes = [
  {
    path: '',
    component: PartialHydrationComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    PartialHydrationComponent,
    RouterModule.forChild(routes)
  ]
})
export class PartialHydrationModule { }
