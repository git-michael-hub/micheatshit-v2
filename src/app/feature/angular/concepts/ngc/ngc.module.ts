import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
import { NgcComponent } from './ngc.component';

@NgModule({
  declarations: [
    NgcComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule
  ],
  exports: [
    NgcComponent
  ]
})
export class NgcModule { }
