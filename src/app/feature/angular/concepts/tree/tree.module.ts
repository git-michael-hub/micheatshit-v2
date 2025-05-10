import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { HighlightModule } from 'ngx-highlightjs';
import { TreeRoutingModule } from './tree-routing.module';

@NgModule({
  declarations: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    TreeRoutingModule
  ]
})
export class TreeModule { }
