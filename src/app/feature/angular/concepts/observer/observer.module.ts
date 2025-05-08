import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObserverComponent } from './observer.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ObserverComponent
  }
];

@NgModule({
  declarations: [ObserverComponent],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ObserverModule { }
