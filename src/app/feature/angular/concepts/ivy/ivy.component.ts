import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-ivy',
  templateUrl: './ivy.component.html',
  styleUrls: ['./ivy.component.scss']
})
export class IvyComponent extends UnsubscribeService implements OnInit {
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
  code_1 = `// How Ivy Tree-Shaking Works in Angular 19
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: \`
    <div>{{ '{{' }} message {{ '}}' }}</div>
  \`,
  standalone: false
})
export class ExampleComponent {
  message = 'Hello Ivy!';

  // This unused method will be tree-shaken out in production
  unusedMethod() {
    console.log('This method will be removed by Ivy');
  }
}`;

  code_2 = `// Ivy Locality Features in Angular 19
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-local-compilation',
  template: \`<div>{{ '{{' }} title {{ '}}' }}</div>\`,
})
export class LocalCompilationComponent {
  @Input() title: string = 'Ivy Compilation';

  // With Ivy, this component can be compiled in isolation
  // without knowledge of other components
}

// Ivy doesn't require knowledge of all components to compile any individual component
// This enables faster compilation, better build times, and improved developer experience`;

  code_3 = `// Ivy Incremental DOM in Angular 19
import { Component } from '@angular/core';

@Component({
  selector: 'app-incremental',
  template: \`
    <div *ngIf="showContent">{{ '{{' }} message {{ '}}' }}</div>
    <button (click)="toggleContent()">Toggle</button>
  \`
})
export class IncrementalComponent {
  showContent = true;
  message = 'Incremental DOM in action';

  toggleContent() {
    this.showContent = !this.showContent;
    // Ivy's incremental DOM approach only updates
    // the parts of the DOM that actually changed
  }
}`;

  code_4 = `// Ivy's AOT Compilation in Angular 19
import { Component } from '@angular/core';

@Component({
  selector: 'app-aot-example',
  template: \`
    <div>
      <p>{{ '{{' }} getGreeting() {{ '}}' }}</p>
    </div>
  \`
})
export class AOTExampleComponent {
  private name = 'Developer';

  getGreeting(): string {
    return \`Hello, \${this.name}! This component was compiled with Ivy's AOT.\`;
    // Ivy improves AOT compilation with better error messages,
    // faster compilation, and reduced bundle sizes
  }
}`;

  code_5 = `// Ivy and Dynamic Component Creation in Angular 19
import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-dynamic-creator',
  template: \`<div class="container"></div>\`
})
export class DynamicCreatorComponent {
  constructor(
    private viewContainerRef: ViewContainerRef
  ) {}

  createComponent() {
    // In Angular 19 with Ivy, dynamic component creation is simpler
    const componentRef = this.viewContainerRef.createComponent(DynamicComponent);
    componentRef.instance.message = 'Dynamically created with Ivy';
    componentRef.instance.value = 42;

    // Ivy makes working with dynamic components more straightforward
  }
}`;

  code_6 = `// Ivy Directive Composition API in Angular 19
import { Component, Directive, Input } from '@angular/core';

// Reusable directives with Ivy
@Directive({
  selector: '[highlight]',
  host: {
    '[style.background]': 'color',
    '[style.transition]': '"background 0.3s"'
  }
})
export class HighlightDirective {
  @Input() color = 'yellow';
}

@Component({
  selector: 'app-composition',
  template: \`
    <div highlight color="lightblue">
      Ivy makes directive composition better!
    </div>
  \`,
  hostDirectives: [HighlightDirective]
})
export class CompositionComponent {
  // Ivy's hostDirectives feature allows for better directive composition
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Initialize code snippets if needed
  }
}
