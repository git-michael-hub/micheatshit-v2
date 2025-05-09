import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScopedPackageComponent } from './scoped-package.component';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ScopedPackageComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    HttpClientModule
  ],
  exports: [
    ScopedPackageComponent
  ]
})
export class ScopedPackageModule { }
