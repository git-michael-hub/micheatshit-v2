import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Template reference variables
  code_1_ref: any = { hidden: true };
  code_2_ref: any = { hidden: true };
  code_3_ref: any = { hidden: true };
  code_4_ref: any = { hidden: true };
  code_5_ref: any = { hidden: true };
  code_6_ref: any = { hidden: true };

  // Template outlet references
  notesRef: any;
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;

  // Example code snippets
  code_1 = `// Creating a library with Angular CLI in Angular 19
ng generate library my-awesome-lib --prefix=awesome

// Library project structure
my-workspace/
├── projects/
│   ├── my-awesome-lib/
│   │   ├── README.md
│   │   ├── karma.conf.js
│   │   ├── ng-package.json     // ng-packagr configuration
│   │   ├── package.json        // Library's package.json
│   │   ├── src/
│   │   │   ├── public-api.ts   // Exports from the library
│   │   │   ├── lib/
│   │   │   │   ├── my-awesome-lib.component.ts
│   │   │   │   ├── my-awesome-lib.module.ts
│   │   │   │   └── my-awesome-lib.service.ts
│   │   │   └── test.ts
│   │   └── tsconfig.lib.json   // TypeScript config for library
├── tsconfig.json               // Workspace TypeScript config`;

  code_2 = `// public-api.ts - Exposing components, services, and other features
export * from './lib/my-awesome-lib.service';
export * from './lib/my-awesome-lib.component';
export * from './lib/my-awesome-lib.module';

// You can organize exports by feature
export * from './lib/feature-one/index';
export * from './lib/feature-two/index';

// Each feature index file can export its own components
// index.ts in feature-one folder
export * from './feature-one.component';
export * from './feature-one.service';
export * from './feature-one.types';`;

  code_3 = `// Building libraries with Angular 19 modern features
// Use standalone components in your library
import { Component } from '@angular/core';

@Component({
  selector: 'awesome-feature',
  template: \`
    <div>
      <h2>{{ '{{' }} title }}</h2>
      <p>A reusable component from your library</p>

      <!-- Angular 19 built-in control flow -->
      @if (showDetails) {
        <div class="details">{{ '{{' }} details }}</div>
      } @else {
        <button (click)="toggleDetails()">Show Details</button>
      }
    </div>
  \`,
  standalone: true
})
export class FeatureComponent {
  title = 'Awesome Feature';
  details = 'This component uses Angular 19 features!';
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}`;

  code_4 = `// Secondary entry points for optimized tree-shaking
// File structure for secondary entry points
my-awesome-lib/
├── src/
│   ├── public-api.ts              // Main entry point
│   ├── lib/
│   │   ├── core/
│   │   │   ├── public-api.ts      // Core entry point
│   │   │   ├── ng-package.json
│   │   │   └── ...
│   │   ├── feature-a/
│   │   │   ├── public-api.ts      // Feature A entry point
│   │   │   ├── ng-package.json
│   │   │   └── ...
│   │   └── feature-b/
│   │       ├── public-api.ts      // Feature B entry point
│   │       ├── ng-package.json
│   │       └── ...

// Using specific entry points in an application
import { CoreService } from 'my-awesome-lib/core';
import { FeatureAComponent } from 'my-awesome-lib/feature-a';

// Instead of importing everything
// import { CoreService, FeatureAComponent } from 'my-awesome-lib';`;

  code_5 = `// Using signals in Angular 19 libraries
import { Component, signal, computed, input } from '@angular/core';

@Component({
  selector: 'awesome-counter',
  template: \`
    <div class="counter">
      <h3>{{ '{{' }} title() }}</h3>
      <p>Count: {{ '{{' }} count() }}</p>
      <p>Doubled: {{ '{{' }} doubledCount() }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  \`,
  standalone: true
})
export class CounterComponent {
  // Input signal with default value
  title = input('Counter');

  // Internal signal state
  count = signal(0);

  // Computed signal
  doubledCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => Math.max(0, value - 1));
  }
}`;

  code_6 = `// Publishing a library to npm
// Step 1: Build the library
ng build my-awesome-lib

// Step 2: Navigate to the dist folder
cd dist/my-awesome-lib

// Step 3: Pack the library (optional testing step)
npm pack

// Step 4: Publish to npm
npm publish

// package.json configuration for Angular 19 libraries
{
  "name": "my-awesome-lib",
  "version": "1.0.0",
  "peerDependencies": {
    "@angular/common": "^19.0.0",
    "@angular/core": "^19.0.0"
  },
  "dependencies": {
    "tslib": "^2.6.0"
  },
  "sideEffects": false,
  "type": "module",
  "exports": {
    "./package.json": {
      "default": "./package.json"
    },
    ".": {
      "types": "./index.d.ts",
      "esm2022": "./esm2022/my-awesome-lib.mjs",
      "esm": "./esm2022/my-awesome-lib.mjs",
      "default": "./fesm2022/my-awesome-lib.mjs"
    },
    "./core": {
      "types": "./core/index.d.ts",
      "esm2022": "./esm2022/core/core.mjs",
      "esm": "./esm2022/core/core.mjs",
      "default": "./fesm2022/core.mjs"
    }
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Initialize code snippets if needed
  }
}
