import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { CustomElementComponent } from './custom-element.component';

@NgModule({
  declarations: [
    CustomElementComponent
  ],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports: [
    CustomElementComponent
  ]
})
export class CustomElementModule { }
