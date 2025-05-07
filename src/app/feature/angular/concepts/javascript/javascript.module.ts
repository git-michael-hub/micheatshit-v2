import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
import { JavascriptComponent } from './javascript.component';

@NgModule({
  declarations: [
    JavascriptComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HighlightModule
  ],
  exports: [
    JavascriptComponent
  ]
})
export class JavascriptModule { }
