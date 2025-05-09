import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenComponent } from './token.component';
import { HighlightModule } from 'ngx-highlightjs';
import { TokenRoutingModule } from './token-routing.module';

@NgModule({
  declarations: [
    TokenComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    TokenRoutingModule
  ]
})
export class TokenModule { }
