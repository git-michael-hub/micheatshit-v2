import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ProviderComponent
  }
];

@NgModule({
  declarations: [ProviderComponent],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ProviderModule { }
