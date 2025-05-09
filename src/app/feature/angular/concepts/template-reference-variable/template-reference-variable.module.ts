import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateReferenceVariableComponent } from './template-reference-variable.component';
import { HighlightModule } from 'ngx-highlightjs';
import { TemplateReferenceVariableRoutingModule } from './template-reference-variable-routing.module';

@NgModule({
  declarations: [TemplateReferenceVariableComponent],
  imports: [
    CommonModule,
    FormsModule,
    HighlightModule,
    TemplateReferenceVariableRoutingModule
  ]
})
export class TemplateReferenceVariableModule { }
