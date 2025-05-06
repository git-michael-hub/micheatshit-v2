import { Component } from '@angular/core';

@Component({
  selector: 'app-declarable',
  templateUrl: './declarable.component.html',
  styleUrls: ['./declarable.component.scss']
})
export class DeclarableComponent {
  selectedTab = 1;

  // Sample code snippets for the component
  code_1 = `
// Basic component declaration in NgModule
import { NgModule } from '@angular/core';
import { MyComponent } from './my.component';

@NgModule({
  declarations: [
    MyComponent // Component is declarable
  ],
  exports: [
    MyComponent // Optional: Making it available to other modules
  ]
})
export class MyModule { }
  `;

  code_2 = `
// Directive declaration in NgModule
import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective // Directive is declarable
  ],
  exports: [
    HighlightDirective // Optional: Making it available to other modules
  ]
})
export class DirectivesModule { }
  `;

  code_3 = `
// Pipe declaration in NgModule
import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    FilterPipe // Pipe is declarable
  ],
  exports: [
    FilterPipe // Optional: Making it available to other modules
  ]
})
export class PipesModule { }
  `;

  code_4 = `
// Standalone component in Angular 19 (not needing NgModule declarations)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone',
  standalone: true, // No longer requires declaration in NgModule
  imports: [CommonModule], // Imports dependencies directly
  template: \`<h1>I'm a standalone component!</h1>\`
})
export class StandaloneComponent { }
  `;

  code_5 = `
// Using declarables in templates
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <!-- Using a declarable component -->
    <app-my-component></app-my-component>

    <!-- Using a declarable directive -->
    <div appHighlight>Highlighted text</div>

    <!-- Using a declarable pipe -->
    {{ data | filterPipe:criteria }}
  \`
})
export class AppComponent { }
  `;
}
