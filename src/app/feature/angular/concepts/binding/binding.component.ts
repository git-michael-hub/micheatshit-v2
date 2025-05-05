import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BindingComponent {
  selectedTab = 1;

  @ViewChild('code1') code1?: ElementRef;
  @ViewChild('code2') code2?: ElementRef;
  @ViewChild('code3') code3?: ElementRef;
  @ViewChild('code4') code4?: ElementRef;
  @ViewChild('code5') code5?: ElementRef;

  // Code examples for different binding types
  interpolationCode = `<!-- Interpolation with double curly braces -->
<h1>Hello, {{ name }}</h1>
<p>Sum: {{ 1 + 2 + 3 }}</p>
<div>Status: {{ isActive ? 'Active' : 'Inactive' }}</div>
<p>{{ getFullName() }}</p>`;

  propertyBindingCode = `<!-- Property binding with square brackets -->
<img [src]="imageUrl" [alt]="imageAlt">
<button [disabled]="isSubmitting">Submit</button>
<div [class.highlight]="isSelected">Selected item</div>
<app-user-profile [user]="currentUser"></app-user-profile>`;

  eventBindingCode = `<!-- Event binding with parentheses -->
<button (click)="saveData()">Save</button>
<input (input)="handleInput($event)">
<div (mouseenter)="showTooltip()" (mouseleave)="hideTooltip()">
  Hover me
</div>
<form (submit)="submitForm($event)"></form>`;

  twoWayBindingCode = `<!-- Two-way binding with [(ngModel)] -->
<input [(ngModel)]="userName" placeholder="Enter username">

<!-- Two-way binding can also be written as: -->
<input
  [ngModel]="userName"
  (ngModelChange)="userName = $event">

<!-- Custom two-way binding for components -->
<app-color-picker
  [(color)]="selectedColor">
</app-color-picker>`;

  signalBindingCode = `// Component with signal-based state
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <!-- Binding to signal values directly -->
    <div>Count: {{ count() }}</div>
    <div>Squared: {{ countSquared() }}</div>

    <!-- Event binding to update signals -->
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
  \`
})
export class CounterComponent {
  // Create a signal with initial value
  count = signal(0);

  // Computed signal that automatically updates
  countSquared = computed(() => this.count() * this.count());

  increment() {
    // Update signal value with set method
    this.count.set(this.count() + 1);
  }

  decrement() {
    // Alternative update approach
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}`;
}
