import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { DecoratorComponent } from './decorator.component';

@NgModule({
  declarations: [DecoratorComponent],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports: [DecoratorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DecoratorModule { }
