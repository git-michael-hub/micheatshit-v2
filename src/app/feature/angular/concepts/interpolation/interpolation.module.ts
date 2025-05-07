import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
import { InterpolationComponent } from './interpolation.component';

@NgModule({
  declarations: [
    InterpolationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HighlightModule
  ],
  exports: [
    InterpolationComponent
  ]
})
export class InterpolationModule { }
