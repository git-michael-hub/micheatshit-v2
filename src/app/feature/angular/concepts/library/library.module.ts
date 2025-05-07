import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HighlightModule
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }
