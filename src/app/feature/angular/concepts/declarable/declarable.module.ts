import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { DeclarableComponent } from './declarable.component';

@NgModule({
  declarations: [DeclarableComponent],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports: [DeclarableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeclarableModule { }
