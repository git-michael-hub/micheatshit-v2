import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
import { IvyComponent } from './ivy.component';

@NgModule({
  declarations: [
    IvyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HighlightModule
  ],
  exports: [
    IvyComponent
  ]
})
export class IvyModule { }
