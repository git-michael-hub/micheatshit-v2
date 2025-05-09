import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchematicsCliComponent } from './schematics-cli.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SchematicsCliComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule
  ],
  exports: [
    SchematicsCliComponent
  ]
})
export class SchematicsCliModule { }
