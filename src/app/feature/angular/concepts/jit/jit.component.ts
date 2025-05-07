import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-jit',
  templateUrl: './jit.component.html',
  styleUrls: ['./jit.component.scss']
})
export class JitComponent extends UnsubscribeService implements OnInit {
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
  code_1 = `// Just-in-Time compilation in Angular 19
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

// Main entry point for JIT compilation
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The platformBrowserDynamic includes the JIT compiler
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));`;

  code_2 = `// Configuring JIT mode in Angular 19
// angular.json configuration
{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "configurations": {
            "development": {
              "aot": false, // Explicitly disable AOT to use JIT
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          }
        }
      }
    }
  }
}

// Command to run in JIT mode
// ng serve --configuration=development`;

  code_3 = `// Dynamic Template Compilation with JIT
import { Component, Compiler, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-component',
  template: \`<div>{{ '{{' }} message {{ '}}' }}</div>\`
})
export class DynamicComponent {
  message = 'This component was compiled at runtime!';
}

@Component({
  selector: 'app-jit-example',
  template: \`
    <div>
      <button (click)="createDynamicComponent()">Create Dynamic Component</button>
      <div #container></div>
    </div>
  \`
})
export class JitExampleComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(
    private compiler: Compiler,
    private injector: Injector
  ) {}

  createDynamicComponent() {
    // Create a module for our dynamic component
    @NgModule({
      declarations: [DynamicComponent],
      imports: [CommonModule]
    })
    class DynamicModule {}

    // Compile the module and component at runtime
    this.compiler.compileModuleAndAllComponentsAsync(DynamicModule)
      .then(factory => {
        // Find the component factory
        const componentFactory = factory.componentFactories
          .find(f => f.componentType === DynamicComponent);

        if (componentFactory) {
          // Create the component
          this.container.clear();
          this.container.createComponent(componentFactory, 0, this.injector);
        }
      });
  }
}`;

  code_4 = `// Eval-based Template Compilation (Advanced JIT use case)
import { Component, NgZone } from '@angular/core';
import { Compiler, NgModule, Component as NgComponent } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eval-template',
  template: \`
    <div>
      <textarea [(ngModel)]="templateCode" rows="5" cols="40"></textarea>
      <button (click)="compileAndRender()">Compile & Render</button>
      <div #renderContainer></div>
    </div>
  \`
})
export class EvalTemplateComponent {
  @ViewChild('renderContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  templateCode = '<div>Hello {{ '{{' }} name {{ '}}' }}!</div>';

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private ngZone: NgZone
  ) {}

  compileAndRender() {
    // Create a dynamic component with the user-provided template
    const dynamicComponentType = this.createDynamicComponent(this.templateCode);

    // Create a module for this component
    @NgModule({
      declarations: [dynamicComponentType],
      imports: [CommonModule]
    })
    class DynamicModule {}

    // Use JIT compilation
    this.ngZone.runOutsideAngular(() => {
      this.compiler.compileModuleAndAllComponentsAsync(DynamicModule)
        .then(factory => {
          const componentFactory = factory.componentFactories[0];

          this.ngZone.run(() => {
            this.container.clear();
            const componentRef = this.container.createComponent(componentFactory);
            // Set input properties
            componentRef.instance.name = 'Angular Developer';
          });
        });
    });
  }

  private createDynamicComponent(template: string) {
    @NgComponent({
      selector: 'dynamic-component',
      template: template
    })
    class DynamicComponent {
      name = 'Angular Developer';
    }

    return DynamicComponent;
  }
}`;

  code_5 = `// Debugging JIT Compiled Code in Angular 19
import { Component, OnInit } from '@angular/core';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-jit-debug',
  template: \`
    <div>
      <h3>JIT Debugging Example</h3>
      <p>Environment: {{ '{{' }} environmentInfo {{ '}}' }}</p>
      <button (click)="triggerError()">Trigger Error</button>
    </div>
  \`
})
export class JitDebugComponent implements OnInit {
  environmentInfo = 'Loading...';

  ngOnInit() {
    // JIT mode provides more readable stack traces and source maps in development
    this.environmentInfo = isDevMode()
      ? 'Development mode (JIT enabled)'
      : 'Production mode (AOT enabled)';

    // In development mode with JIT, we have access to better debugging
    if (isDevMode()) {
      console.log('JIT mode active - debugging tools available');
      // Some development-only code
      this.setupDebugHelpers();
    }
  }

  triggerError() {
    try {
      // This will cause an error
      const obj: any = null;
      obj.nonExistentMethod();
    } catch (error) {
      console.error('Error caught:', error);

      // In JIT mode, error stack traces are more detailed and readable
      // since they reference the original TypeScript code
      alert(\`Error detected! Check console for details.
JIT compilation provides better stack traces during development.\`);
    }
  }

  private setupDebugHelpers() {
    // Development-only debug helpers that rely on JIT
    window['debugComponent'] = this;

    // These console methods are more useful with JIT's preserved class names
    console.log('Component instance:', this);
    console.log('Component constructor name:', this.constructor.name);
  }
}`;

  code_6 = `// JIT vs AOT Comparison in Angular 19
import { Component } from '@angular/core';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-compilation-comparison',
  template: \`
    <div class="comparison">
      <h3>Compilation Mode: {{ '{{' }} compilationMode {{ '}}' }}</h3>

      <table>
        <tr>
          <th>Feature</th>
          <th>JIT (Development)</th>
          <th>AOT (Production)</th>
        </tr>
        <tr>
          <td>Bundle Size</td>
          <td>Larger (includes compiler)</td>
          <td>Smaller (no compiler)</td>
        </tr>
        <tr>
          <td>Initial Load Time</td>
          <td>Slower</td>
          <td>Faster</td>
        </tr>
        <tr>
          <td>Error Detection</td>
          <td>Runtime</td>
          <td>Build time</td>
        </tr>
        <tr>
          <td>Debugging</td>
          <td>Easier with source maps</td>
          <td>More difficult</td>
        </tr>
        <tr>
          <td>Dynamic Templates</td>
          <td>Supported</td>
          <td>Limited support</td>
        </tr>
      </table>

      <button (click)="showModeDetails()">Show Mode Details</button>
    </div>
  \`,
  styles: [\`
    .comparison table {
      width: 100%;
      border-collapse: collapse;
    }
    .comparison th, .comparison td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    .comparison tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  \`]
})
export class CompilationComparisonComponent {
  get compilationMode(): string {
    return isDevMode() ? 'JIT (Just-in-Time)' : 'AOT (Ahead-of-Time)';
  }

  showModeDetails() {
    const details = {
      mode: this.compilationMode,
      features: isDevMode()
        ? ['Dynamic evaluation', 'Runtime compilation', 'Better debugging']
        : ['Optimized bundles', 'Faster startup', 'Better security'],
      recommendation: isDevMode()
        ? 'Use JIT during development for better debugging experience'
        : 'Use AOT for production deployments for performance and security'
    };

    console.table(details);
    alert(\`Current mode: \${details.mode}

This application is running in \${isDevMode() ? 'development' : 'production'} mode.
See console for more details.\`);
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Initialize code snippets if needed
  }
}
