import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
import { ModuleComponent } from './module.component';

@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HighlightModule
  ],
  exports: [
    ModuleComponent
  ]
})
export class ModuleComponentModule { }
