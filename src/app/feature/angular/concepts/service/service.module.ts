import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
