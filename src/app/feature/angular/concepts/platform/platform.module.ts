import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent
  }
];

@NgModule({
  declarations: [PlatformComponent],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class PlatformModule { }
