import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsconfigRoutingModule } from './tsconfig-routing.module';
import { TypescriptConfigComponent } from './typescript-config/typescript-config.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
import { UnidirectionalDataFlowComponent } from './unidirectional-data-flow/unidirectional-data-flow.component';
import { ViewComponent } from './view/view.component';
import { ViewEngineComponent } from './view-engine/view-engine.component';
import { WorkspaceConfigurationComponent } from './workspace-configuration/workspace-configuration.component';
import { ZoneComponent } from './zone/zone.component';

@NgModule({
  declarations: [
    TypescriptConfigComponent,
    UnidirectionalDataFlowComponent
  ],
  imports: [
    CommonModule,
    TsconfigRoutingModule,
    HighlightModule,
    HttpClientModule,
    ViewComponent,
    ViewEngineComponent,
    WorkspaceConfigurationComponent,
    ZoneComponent
  ]
})
export class TsconfigModule { }
