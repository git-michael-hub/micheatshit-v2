import { Component, OnInit } from '@angular/core';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.scss']
})
export class LifecycleHookComponent extends UnsubscribeService implements OnInit {
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
  code_1 = `// Basic lifecycle hook implementation in Angular 19
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: \`
    <h2>{{ title }}</h2>
    <p>Component is active: {{ isActive }}</p>
    <button (click)="toggleActive()">Toggle Active State</button>
  \`
})
export class LifecycleDemoComponent implements OnInit, OnDestroy {
  title = 'Lifecycle Hooks Demo';
  isActive = false;

  constructor() {
    console.log('Constructor called');
    // Use constructor for basic initialization only
    // DO NOT perform complex initialization here
  }

  ngOnInit() {
    console.log('ngOnInit called');
    // Ideal for initialization tasks
    this.isActive = true;
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
    // Clean up resources, unsubscribe from observables
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
}`;

  code_2 = `// Change detection lifecycle hooks in Angular 19
import { Component, OnChanges, DoCheck, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-change-detection-demo',
  template: \`
    <div class="card">
      <h3>User Profile</h3>
      <p>Name: {{ userName }}</p>
      <p>Role: {{ userRole }}</p>
      <p>Last Updated: {{ lastUpdated | date:'medium' }}</p>
    </div>
  \`
})
export class ChangeDetectionDemoComponent implements OnChanges, DoCheck {
  @Input() userName = '';
  @Input() userRole = '';
  @Input() userId = 0;

  lastUpdated = new Date();
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    // Called before ngOnInit() and whenever one of the data-bound
    // input properties changes

    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);

      if (changedProp.isFirstChange()) {
        log.push(\`Initial value of \${propName} set to \${to}\`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(\`\${propName} changed from \${from} to \${to}\`);
      }
    }

    this.changeLog.push(\`${new Date().toISOString()}: \${log.join(', ')}\`);
    this.lastUpdated = new Date();
  }

  ngDoCheck() {
    // Called during every change detection cycle
    // Use carefully - runs very frequently

    // Example: Custom change detection for objects that Angular doesn't detect
    // like when a property of an object changes without the reference changing
    console.log('ngDoCheck called - Custom change detection check');
  }
}`;

  code_3 = `// Content lifecycle hooks in Angular 19
import { Component, AfterContentInit, AfterContentChecked, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-lifecycle-demo',
  template: \`
    <div class="container">
      <h3>Content Lifecycle Demo</h3>
      <div class="content-area">
        <ng-content></ng-content>
      </div>
      <p *ngIf="contentMessage">Content Message: {{ contentMessage }}</p>
    </div>
  \`
})
export class ContentLifecycleDemoComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild('messageRef') messageElement: ElementRef;
  contentMessage: string;

  ngAfterContentInit() {
    // Called once after content is initialized
    // Safe to access projected content
    console.log('ngAfterContentInit called');
    if (this.messageElement) {
      this.contentMessage = this.messageElement.nativeElement.textContent;
    }
  }

  ngAfterContentChecked() {
    // Called after every check of the component's content
    console.log('ngAfterContentChecked called');

    // Note: Be careful with updates here to avoid infinite loops
    if (this.messageElement &&
        this.contentMessage !== this.messageElement.nativeElement.textContent) {
      this.contentMessage = this.messageElement.nativeElement.textContent;
    }
  }
}

// Parent component usage:
// <app-content-lifecycle-demo>
//   <p #messageRef>This is projected content that will be detected</p>
// </app-content-lifecycle-demo>`;

  code_4 = `// View lifecycle hooks in Angular 19
import { Component, AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-lifecycle-demo',
  template: \`
    <div class="container">
      <h3>View Lifecycle Demo</h3>
      <input #inputRef type="text" [(ngModel)]="inputValue">
      <p>Current value: {{ viewValue }}</p>
    </div>
  \`
})
export class ViewLifecycleDemoComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('inputRef') inputElement: ElementRef;
  inputValue = '';
  viewValue = '';

  ngAfterViewInit() {
    // Called once after the view is initialized
    console.log('ngAfterViewInit called');

    // Safe to interact with the DOM
    if (this.inputElement) {
      // Focus the input when view initializes
      this.inputElement.nativeElement.focus();
    }
  }

  ngAfterViewChecked() {
    // Called after every check of the component's view
    console.log('ngAfterViewChecked called');

    // Update properties based on view state
    // Be careful with updates here to avoid infinite loops
    if (this.inputValue !== this.viewValue) {
      // Only update when different to prevent loops
      this.viewValue = this.inputValue;
    }
  }
}`;

  code_5 = `// Lifecycle hooks with signals in Angular 19
import { Component, signal, computed, effect, input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-signals-lifecycle',
  template: \`
    <div class="signal-container">
      <h3>Signals with Lifecycle Hooks</h3>
      <p>Counter: {{ count() }}</p>
      <p>Double: {{ doubleCount() }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`,
  standalone: true
})
export class SignalsLifecycleComponent implements OnInit, OnDestroy {
  // Input signal
  name = input<string>('User');

  // Internal signals
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  // Effects cleanup
  private cleanup: (() => void) | null = null;

  ngOnInit() {
    console.log('ngOnInit: Setting up effect');

    // Create an effect that will be automatically cleaned up
    this.cleanup = effect(() => {
      // This runs whenever count changes
      console.log(\`Count changed to \${this.count()}\`);

      // In a real app, you might perform side effects like:
      // - Update localStorage
      // - Send analytics
      // - Update URL parameters
    });
  }

  increment() {
    // Update signal value
    this.count.update(value => value + 1);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Cleaning up resources');

    // Cleanup the effect
    // Note: Angular automatically cleans up effects when the component is destroyed,
    // but this is a good practice for other cleanup tasks
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = null;
    }
  }
}`;

  code_6 = `// Zoneless application lifecycle hooks in Angular 19
import { Component, afterNextRender, afterRender, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-zoneless-lifecycle',
  template: \`
    <div class="zoneless-container">
      <h3>Zoneless Application Lifecycle</h3>
      <p>Render count: {{ renderCount }}</p>
      <button (click)="triggerUpdate()">Trigger Update</button>
    </div>
  \`
})
export class ZonelessLifecycleComponent implements OnInit, OnDestroy {
  renderCount = 0;
  private cleanup: Array<() => void> = [];

  constructor() {
    // Register afterRender callback - runs after every render
    const renderCleanup = afterRender(() => {
      console.log('afterRender: Component has been rendered');
      this.renderCount++;
    });
    this.cleanup.push(renderCleanup);

    // Register afterNextRender callback - runs once after the next render
    afterNextRender(() => {
      console.log('afterNextRender: First render completed');
      // Perform one-time initialization that requires the DOM

      // Example: Initialize a third-party library
      this.initializeExternalLibrary();
    });
  }

  ngOnInit() {
    console.log('ngOnInit: Component initialized');
    // Traditional initialization that doesn't need the DOM
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Component destroyed');

    // Clean up all registered callbacks
    this.cleanup.forEach(cleanupFn => cleanupFn());
    this.cleanup = [];
  }

  triggerUpdate() {
    console.log('Manually triggering an update');
    // In a zoneless application, you must manually trigger change detection
    // Angular 19 provides APIs for this
  }

  private initializeExternalLibrary() {
    console.log('Initializing external library after DOM is ready');
    // Example of initialization that requires the DOM to be ready
  }
}`;

  constructor() {
    super();
  }

  ngOnInit() {
    // Initialize if needed
  }
}
