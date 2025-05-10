import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranspileComponent } from './transpile.component';
import { HighlightModule } from 'ngx-highlightjs';
import { TranspileRoutingModule } from './transpile-routing.module';

@NgModule({
  declarations: [
    TranspileComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    TranspileRoutingModule
  ]
})
export class TranspileModule { }
