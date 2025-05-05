import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent extends UnsubscribeService {
  selectedTab = 1;

  // Template references for the tabs
  @ViewChild('notesRef') notesRef!: TemplateRef<any>;
  @ViewChild('bestRef') bestRef!: TemplateRef<any>;
  @ViewChild('prosConsRef') prosConsRef!: TemplateRef<any>;
  @ViewChild('topicsRef') topicsRef!: TemplateRef<any>;

  // Code examples for signals
  basicSignalCode = `import { signal, computed, effect } from '@angular/core';

// Create a signal with an initial value
const count = signal(0);

// Read the signal's value
console.log(count()); // 0

// Update the signal's value
count.set(5);
console.log(count()); // 5

// Update based on the previous value
count.update(value => value + 1);
console.log(count()); // 6

// Create a computed signal that depends on another signal
const doubled = computed(() => count() * 2);
console.log(doubled()); // 12

// Effect that runs when any of its dependencies change
effect(() => {
  console.log(\`The count is \${count()} and doubled is \${doubled()}\`);
  // The count is 6 and doubled is 12
});

// When we update the count, the effect runs again automatically
count.set(10);
// Effect logs: The count is 10 and doubled is 20`;

  signalComponentsCode = `import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div>
      <h2>Counter: {{ count() }}</h2>
      <p>Doubled: {{ doubled() }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  // Signal for component state
  count = signal(0);

  // Computed signal derived from count
  doubled = computed(() => count() * 2);

  constructor() {
    // Effect runs whenever count changes
    effect(() => {
      console.log(\`Counter changed to \${this.count()}\`);
    });
  }

  increment() {
    this.count.update(n => n + 1);
  }
}`;

  advancedSignalsCode = `import { signal, computed, effect, untracked, Signal } from '@angular/core';

// 1. Signal with custom equality function
const user = signal({ name: 'Alice', age: 30 }, {
  equal: (a, b) => a.name === b.name && a.age === b.age
});

// Now only changes to name or age will trigger updates
user.set({ name: 'Alice', age: 30 }); // No notifications
user.set({ name: 'Bob', age: 30 }); // Triggers updates

// 2. Signal wrapping
// Convert a value to a read-only signal
function wrap<T>(value: T): Signal<T> {
  const sig = signal(value);
  return () => sig();
}

const readOnly = wrap('hello');
console.log(readOnly()); // 'hello'
// readOnly.set('world'); // Error: readOnly is not a WritableSignal

// 3. Untracked to prevent dependencies
const count = signal(0);
const name = signal('Alice');

const message = computed(() => {
  // Only depends on count, not name
  return \`Count: \${count()}, User: \${untracked(() => name())}\`;
});

// 4. Effect cleanup
effect((onCleanup) => {
  const intervalId = setInterval(() => {
    console.log(count());
  }, 1000);

  // Cleanup function runs before the next effect execution
  // or when the effect is destroyed
  onCleanup(() => {
    clearInterval(intervalId);
  });
});`;

  v19EnhancementsCode = `// Angular 19 Signal Enhancements

// 1. Signal-based Component Inputs
import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: \`<div>{{ name() }}</div>\`
})
export class UserCardComponent {
  // Signal-based input with default value
  name = input('Guest');

  // Required input with type
  userId = input.required<string>();

  // Input with transform function
  age = input(0, {
    transform: (value: number) => Math.max(0, value)
  });

  // Two-way binding with model signal
  isActive = model(false);
}

// 2. Read-only signals with asReadonly
import { signal } from '@angular/core';

const counter = signal(0);
// Create a read-only version of the signal
const readonlyCounter = counter.asReadonly();

counter.update(v => v + 1); // Works fine
// readonlyCounter.update(v => v + 1); // Error: no update method

// 3. Improved type-safety
import { signal, computed, effect } from '@angular/core';

// Signal generic types are properly preserved
const items = signal<string[]>([]);
items.update(arr => [...arr, 'new item']);

// Type checking in computed values
const itemCount = computed(() => items().length);

// Type inference in effects
effect(() => {
  const currentItems: string[] = items(); // Type is inferred correctly
  console.log(\`There are \${itemCount()} items\`);
});

// 4. Enhanced Developer Experience
// Better error messages for common mistakes
effect(() => {
  console.log(items); // Error: Signal accessed without being called
  console.log(items()); // Correct: Call the signal to get its value
});`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Load code examples from files if needed
    // Currently using inline examples
  }
}
