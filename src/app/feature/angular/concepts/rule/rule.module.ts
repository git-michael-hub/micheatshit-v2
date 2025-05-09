import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleComponent } from './rule.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RuleComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule
  ],
  exports: [
    RuleComponent
  ]
})
export class RuleModule { }
