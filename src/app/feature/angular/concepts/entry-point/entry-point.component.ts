import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-point',
  templateUrl: './entry-point.component.html',
  styleUrls: ['./entry-point.component.scss']
})
export class EntryPointComponent {
  selectedTab = 1;

  // Template reference variables
  code_1_ref: any = { hidden: false };
  code_2_ref: any = { hidden: false };
  code_3_ref: any = { hidden: false };
  code_4_ref: any = { hidden: false };
  code_5_ref: any = { hidden: false };
  code_6_ref: any = { hidden: false };

  // Example code snippets
  code_1 = `
// Basic Entry Point Example (package.json)
{
  "name": "my-angular-library",
  "version": "1.0.0",
  "main": "./bundles/my-lib.umd.js",
  "module": "./fesm2022/my-lib.js",
  "es2022": "./fesm2022/my-lib.js",
  "esm2022": "./esm2022/my-lib.js",
  "typings": "./index.d.ts",
  "exports": {
    ".": {
      "types": "./index.d.ts",
      "esm2022": "./esm2022/my-lib.js",
      "esm": "./esm2022/my-lib.js",
      "default": "./fesm2022/my-lib.js"
    }
  },
  "sideEffects": false
}`;

  code_2 = `
// Entry Point Module (public-api.ts)
/*
 * Public API Surface of my-library
 */

export * from './lib/component-a/component-a.component';
export * from './lib/component-b/component-b.component';
export * from './lib/directives/highlight.directive';
export * from './lib/pipes/transform.pipe';
export * from './lib/services/data.service';
export * from './lib/my-library.module';

// Each exported symbol becomes part of your library's public API`;

  code_3 = `
// Secondary Entry Points Configuration (Angular 19)
// File structure for a library with multiple entry points
my-library/
├── package.json              // Primary entry point
├── ng-package.json           // ng-packagr configuration
├── public-api.ts             // Primary entry point exports
├── tsconfig.lib.json         // TypeScript config for library
├── projects/
│   └── my-library/
│       ├── feature-a/        // Secondary entry point
│       │   ├── package.json  // {"name": "my-library/feature-a"}
│       │   ├── ng-package.json
│       │   └── public-api.ts // Feature A exports
│       └── feature-b/        // Secondary entry point
│           ├── package.json  // {"name": "my-library/feature-b"}
│           ├── ng-package.json
│           └── public-api.ts // Feature B exports

// This allows importing specific features:
// import { FeatureAComponent } from 'my-library/feature-a';`;

  code_4 = `
// Angular 19 Module Entry Point with Standalone Components
// my-library.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import standalone components
import { ComponentA } from './components/component-a.component';
import { ComponentB } from './components/component-b.component';
import { HighlightDirective } from './directives/highlight.directive';

// Export everything that should be accessible
export { ComponentA, ComponentB, HighlightDirective };

// Export types that are part of your public API
export interface UserConfig {
  theme: 'light' | 'dark';
  features: string[];
}

@NgModule({
  imports: [
    CommonModule,
    // Include standalone components in the module's imports
    ComponentA,
    ComponentB,
    HighlightDirective
  ],
  exports: [
    // Make sure to export the standalone components as well
    ComponentA,
    ComponentB,
    HighlightDirective
  ]
})
export class MyLibraryModule { }`;

  code_5 = `
// Angular 19 Standalone Entry Point (no NgModule required)
// public-api.ts
export { ComponentA } from './lib/components/component-a.component';
export { ComponentB } from './lib/components/component-b.component';
export { HighlightDirective } from './lib/directives/highlight.directive';
export { TransformPipe } from './lib/pipes/transform.pipe';
export { DataService } from './lib/services/data.service';

// You can also export interfaces, types, and constants
export type Theme = 'light' | 'dark' | 'system';
export const LIBRARY_VERSION = '1.0.0';

// A standalone component definition
// component-a.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-component-a',
  standalone: true,
  imports: [CommonModule],
  template: \`<div>Component A works!</div>\`
})
export class ComponentA {}`;

  code_6 = `
// Angular 19 Entry Point with Signals
// data.service.ts
import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Public signals that become part of your API
  readonly items = signal<string[]>([]);
  readonly selectedId = signal<string | null>(null);

  // Computed signal based on other signals
  readonly selectedItem = computed(() => {
    const id = this.selectedId();
    const itemList = this.items();
    return id ? itemList.find(item => item.id === id) : null;
  });

  addItem(item: string) {
    this.items.update(items => [...items, item]);
  }

  selectItem(id: string | null) {
    this.selectedId.set(id);
  }
}

// Export this in public-api.ts to make it available to consumers
// public-api.ts
export * from './lib/services/data.service';`;
}
