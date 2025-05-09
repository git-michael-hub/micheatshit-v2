import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateInputVariableComponent } from './template-input-variable.component';
import { HighlightModule } from 'ngx-highlightjs';
import { TemplateInputVariableRoutingModule } from './template-input-variable-routing.module';

@NgModule({
  declarations: [TemplateInputVariableComponent],
  imports: [
    CommonModule,
    FormsModule,
    HighlightModule,
    TemplateInputVariableRoutingModule
  ]
})
export class TemplateInputVariableModule { }
