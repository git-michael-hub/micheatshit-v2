import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypescriptComponent } from './typescript.component';
import { TypescriptRoutingModule } from './typescript-routing.module';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TypescriptComponent],
  imports: [
    CommonModule,
    TypescriptRoutingModule,
    HighlightModule,
    HttpClientModule
  ]
})
export class TypescriptModule { }
