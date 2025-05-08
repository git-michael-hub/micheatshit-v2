import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PolyfillComponent } from './polyfill.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: PolyfillComponent
  }
];

@NgModule({
  declarations: [PolyfillComponent],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class PolyfillModule { }
