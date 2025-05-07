import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
import { ControlFlowComponent } from './control-flow.component';

@NgModule({
  declarations: [
    ControlFlowComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule
  ],
  exports: [
    ControlFlowComponent
  ]
})
export class ControlFlowModule { }
