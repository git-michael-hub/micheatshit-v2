import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
import { NpmPackageComponent } from './npm-package.component';

@NgModule({
  declarations: [
    NpmPackageComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule
  ],
  exports: [
    NpmPackageComponent
  ]
})
export class NpmPackageModule { }
