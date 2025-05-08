import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  }
];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }
