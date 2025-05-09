import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchematicComponent } from './schematic.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SchematicComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule
  ],
  exports: [
    SchematicComponent
  ]
})
export class SchematicModule { }
