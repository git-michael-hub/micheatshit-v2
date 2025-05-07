import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { AngularDevToolsComponent } from './angular-devtools.component';

@NgModule({
  declarations: [
    AngularDevToolsComponent
  ],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports: [
    AngularDevToolsComponent
  ]
})
export class AngularDevToolsModule { }