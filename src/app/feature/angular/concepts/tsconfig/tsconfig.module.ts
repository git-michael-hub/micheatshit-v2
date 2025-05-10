import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
import { TsconfigRoutingModule } from '../tsconfig-routing.module';
import { TypescriptConfigComponent } from '../typescript-config/typescript-config.component';

@NgModule({
  declarations: [
    TypescriptConfigComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HighlightModule,
    TsconfigRoutingModule
  ]
})
export class TsconfigModule { }
