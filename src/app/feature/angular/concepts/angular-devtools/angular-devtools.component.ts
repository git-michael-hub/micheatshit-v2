import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-devtools',
  templateUrl: './angular-devtools.component.html'
})
export class AngularDevToolsComponent {
  selectedTab = 1;

  // Code examples for the templates
  code_1 = `// Installing Angular DevTools Chrome extension
// Visit the Chrome Web Store and search for "Angular DevTools"
// Or go directly to:
// https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh

// No code required - it's a browser extension!`;

  code_2 = `// Sample code showing how to use the Performance tab
// In your component:

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-performance-optimized',
  template: \`
    <div>{{ expensiveCalculation() }}</div>
    <button (click)="triggerChange()">Update</button>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush // Optimize change detection
})
export class PerformanceOptimizedComponent {
  data = 0;

  triggerChange() {
    this.data++;
  }

  expensiveCalculation() {
    // This would be detected as a potential performance issue
    console.time('calculation');
    // Simulating expensive calculation
    let result = this.data;
    for (let i = 0; i < 1000; i++) {
      result += Math.sqrt(i);
    }
    console.timeEnd('calculation');
    return result.toFixed(2);
  }
}`;

  code_3 = `// Sample code showing component debugging with Signals
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals-debug',
  template: \`
    <div>Counter: {{ counter() }}</div>
    <div>Doubled: {{ doubled() }}</div>
    <button (click)="increment()">Increment</button>
  \`
})
export class SignalsDebugComponent {
  // These signals will be visible in the Components tab
  counter = signal(0);
  doubled = computed(() => this.counter() * 2);

  increment() {
    this.counter.update(value => value + 1);
  }
}`;

  code_4 = `// Sending debug data for profiling
import { ApplicationRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: \`<div>Profiling example</div>\`
})
export class ProfileComponent implements OnInit {
  constructor(
    private appRef: ApplicationRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    // This will trigger events that DevTools can profile
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        // Force several change detection cycles for profiling
        for (let i = 0; i < 5; i++) {
          this.appRef.tick();
        }
      }, 3000);
    });
  }
}`;

  code_5 = `// Creating a directive that can be inspected
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appInspectable]'
})
export class InspectableDirective {
  @Input() appInspectable: string = '';
  @Input() debugData: any;

  // These properties will be visible in the Components tab
  // when you inspect an element with this directive
}

// Usage:
// <div [appInspectable]="'Test'" [debugData]="{ key: 'value' }">
//   This element can be inspected in DevTools
// </div>`;
}
