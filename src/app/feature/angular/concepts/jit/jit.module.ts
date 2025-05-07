import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
import { JitComponent } from './jit.component';

@NgModule({
  declarations: [
    JitComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HighlightModule
  ],
  exports: [
    JitComponent
  ]
})
export class JitModule { }
