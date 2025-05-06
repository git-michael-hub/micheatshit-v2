import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  selectedTab = 1;

  // Sample code snippets for the component
  code_1 = `
// Interpolation
import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-example',
  template: \`
    <h2>{{ title }}</h2>
    <p>The sum of 1 + 1 is {{ 1 + 1 }}</p>
    <p>Your username is {{ user.name }}</p>
  \`
})
export class InterpolationExampleComponent {
  title = 'Interpolation Example';
  user = { name: 'Angular Dev' };
}
  `;

  code_2 = `
// Property Binding
import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: \`
    <!-- Bind to an element property -->
    <img [src]="imageUrl" [alt]="imageAlt">

    <!-- Bind to a component property -->
    <app-user-profile [userId]="currentUser.id"></app-user-profile>

    <!-- Shorthand for setting the disabled property -->
    <button [disabled]="isSubmitting">Submit</button>
  \`
})
export class PropertyBindingComponent {
  imageUrl = 'assets/logo.png';
  imageAlt = 'Angular Logo';
  currentUser = { id: 42 };
  isSubmitting = false;
}
  `;

  code_3 = `
// Event Binding
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: \`
    <!-- Basic click event -->
    <button (click)="handleClick()">Click Me</button>

    <!-- Event with data -->
    <button (click)="handleClick($event)">Get Event Data</button>

    <!-- Key events -->
    <input (keyup.enter)="submitForm()">

    <!-- Custom events from child components -->
    <app-child (itemSelected)="onItemSelected($event)"></app-child>
  \`
})
export class EventBindingComponent {
  handleClick(event?: any) {
    console.log('Button clicked!', event);
  }

  submitForm() {
    console.log('Form submitted!');
  }

  onItemSelected(item: any) {
    console.log('Item selected:', item);
  }
}
  `;

  code_4 = `
// Two-way Binding
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <!-- Two-way binding with ngModel -->
    <input [(ngModel)]="username">
    <p>You entered: {{ username }}</p>

    <!-- The expanded syntax (property and event binding) -->
    <input [ngModel]="email" (ngModelChange)="email = $event">
    <p>Email: {{ email }}</p>
  \`
})
export class TwoWayBindingComponent {
  username = '';
  email = '';
}
  `;

  code_5 = `
// Signal-based binding (Angular 19)
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-binding',
  template: \`
    <h2>{{ title() }}</h2>
    <p>Counter: {{ counter() }}</p>
    <button (click)="increment()">Increment</button>

    <!-- Signal-driven properties -->
    <div [class.active]="isActive()">This div is conditionally active</div>
  \`
})
export class SignalBindingComponent {
  title = signal('Signal Binding Example');
  counter = signal(0);
  isActive = signal(false);

  increment() {
    this.counter.update(value => value + 1);
    this.isActive.set(this.counter() > 5);
  }
}
  `;
}
