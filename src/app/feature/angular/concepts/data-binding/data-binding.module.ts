import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { DataBindingComponent } from './data-binding.component';

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule { }
