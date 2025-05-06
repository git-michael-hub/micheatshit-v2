import { Component } from '@angular/core';

@Component({
  selector: 'app-ecmascript',
  templateUrl: './ecmascript.component.html',
  styleUrls: ['./ecmascript.component.scss']
})
export class EcmascriptComponent {
  selectedTab = 1;

  // Template reference variables
  code_1_ref: any;
  code_2_ref: any;
  code_3_ref: any;
  code_4_ref: any;
  code_5_ref: any;
  code_6_ref: any;

  // Example code snippets
  code_1 = `
// Using ES6+ features in Angular 19
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-es-features',
  standalone: true,
  template: \`
    <div>
      <h2>ES Features in Angular</h2>
      <p>Count: {{ counter() }}</p>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class EsFeaturesComponent {
  // Signal API (leveraging ES proxies and reactivity)
  counter = signal(0);

  // Arrow function
  increment = () => {
    // Optional chaining
    this.counter?.update(val => val + 1);
  }

  // Async/await with promises
  async fetchData() {
    try {
      // Template literals
      const url = \`https://api.example.com/data\`;
      const response = await fetch(url);

      // Nullish coalescing
      const data = await response.json() ?? { default: 'No data' };

      // Destructuring
      const { items = [] } = data;

      // Spread operator
      return [...items];
    } catch {
      // Promise rejection handled
      return [];
    }
  }
}`;

  code_2 = `
// Angular 19 leveraging ES2022+ features
import { Component, computed, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-modern-es',
  standalone: true,
  template: \`
    <div>
      <h3>Modern ECMAScript in Angular 19</h3>
      <div>Status: {{ status() }}</div>
      <div>Data: {{ #if dataReady() }}{{ formattedData() }}{{ #else }}Loading...{{ #endif }}</div>
      <button (click)="loadData()">Reload</button>
    </div>
  \`
})
export class ModernEsComponent {
  // Class fields (public/private)
  #http = inject(HttpClient);

  // Private fields with # syntax (ES2022)
  #baseUrl = 'https://api.example.com';

  // Signals
  data = signal<any>(null);
  loading = signal(false);

  // Computed values (derived state)
  dataReady = computed(() => !!this.data());
  status = computed(() => this.loading() ? 'Loading...' : 'Ready');
  formattedData = computed(() => {
    // Optional chaining with nullish coalescing
    return JSON.stringify(this.data()?.result ?? {}, null, 2);
  });

  // Top-level await (in module context)
  async loadData() {
    this.loading.set(true);

    try {
      // Using Promise methods
      const response = await Promise.all([
        this.#fetchMainData(),
        this.#fetchSecondaryData()
      ]);

      // Object rest/spread
      this.data.set({
        ...response[0],
        secondary: response[1]
      });
    } finally {
      this.loading.set(false);
    }
  }

  // Private method
  #fetchMainData() {
    return this.#http.get(\`\${this.#baseUrl}/main\`).pipe(
      takeUntilDestroyed()
    );
  }

  // Private method
  #fetchSecondaryData() {
    return this.#http.get(\`\${this.#baseUrl}/secondary\`).pipe(
      takeUntilDestroyed()
    );
  }
}`;

  code_3 = `
// tsconfig.json for enabling latest ECMAScript features in Angular 19
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",          // Using ES2022 as target
    "module": "ES2022",          // Module system
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",                  // Include ES2022 library
      "dom"
    ],
    "skipLibCheck": true
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}`;

  code_4 = `
// Using ECMAScript decorators with Angular 19
// Note: These use TypeScript's decorator syntax which deviates from TC39 decorator proposal

// Custom property decorator
function Min(min: number) {
  return function(target: any, propertyKey: string) {
    // Property descriptor manipulation
    let value = target[propertyKey];

    const getter = function() {
      return value;
    };

    const setter = function(newVal: number) {
      if (newVal < min) {
        console.warn(\`Value can't be less than \${min}\`);
        value = min;
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

// Custom method decorator
function LogMethod() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // Save a reference to the original method
    const originalMethod = descriptor.value;

    // Replace the original method with a new one
    descriptor.value = function(...args: any[]) {
      console.log(\`Calling \${propertyKey} with arguments: \${JSON.stringify(args)}\`);

      try {
        // Call the original method
        const result = originalMethod.apply(this, args);
        console.log(\`Method \${propertyKey} returned: \${JSON.stringify(result)}\`);
        return result;
      } catch (e) {
        console.error(\`Method \${propertyKey} threw: \${e}\`);
        throw e;
      }
    };

    return descriptor;
  };
}

@Component({
  selector: 'app-decorated',
  template: \`
    <div>
      <h3>Value: {{ value }}</h3>
      <button (click)="increment()">Increment</button>
      <button (click)="setValue(-10)">Set Invalid Value</button>
      <button (click)="setValue(50)">Set Valid Value</button>
    </div>
  \`
})
export class DecoratedComponent {
  @Min(0) value: number = 10;

  @LogMethod()
  increment() {
    this.value++;
    return this.value;
  }

  @LogMethod()
  setValue(val: number) {
    this.value = val;
    return this.value;
  }
}`;

  code_5 = `
// Angular 19 using the latest ECMAScript features for asynchronous programming
import { Component, signal, effect, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-async-es',
  standalone: true,
  template: \`
    <div>
      <h3>Async ES Features</h3>

      @if (isLoading()) {
        <div>Loading...</div>
      } @else if (error()) {
        <div class="error">{{ error() }}</div>
      } @else if (users().length) {
        <ul>
          @for (user of users(); track user.id) {
            <li>
              {{ user.name }} ({{ user.email }})
              <button (click)="selectUser(user)">Select</button>
            </li>
          }
        </ul>
      } @else {
        <div>No users found</div>
      }

      @if (selectedUser()) {
        <div>
          <h4>Selected User:</h4>
          <pre>{{ selectedUserJson() }}</pre>
        </div>
      }
    </div>
  \`
})
export class AsyncEsComponent {
  #http = inject(HttpClient);

  // Signals for state management
  isLoading = signal(false);
  error = signal<string | null>(null);
  users = signal<User[]>([]);
  selectedUser = signal<User | null>(null);

  // Computed values
  selectedUserJson = computed(() => {
    return this.selectedUser() ? JSON.stringify(this.selectedUser(), null, 2) : '';
  });

  constructor() {
    // Effects for side effects (like logging)
    effect(() => {
      if (this.selectedUser()) {
        console.log(\`User selected: \${this.selectedUser()?.name}\`);
      }
    });

    // Load data on init
    this.loadUsers();
  }

  // Async/await with error handling
  async loadUsers() {
    this.isLoading.set(true);
    this.error.set(null);

    try {
      // Await the Promise from the HTTP call
      const users = await this.#http.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .pipe(
          catchError(err => {
            // Handle HTTP errors
            console.error('Error fetching users', err);
            throw new Error('Failed to load users. Please try again later.');
          })
        )
        .toPromise();

      // Update signal with fetched data
      this.users.set(users || []);
    } catch (e) {
      // Handle any errors in the async operation
      this.error.set(e instanceof Error ? e.message : 'Unknown error occurred');
      this.users.set([]);
    } finally {
      // Always run this code
      this.isLoading.set(false);
    }
  }

  // Method to select a user
  selectUser(user: User) {
    this.selectedUser.set(user);
  }
}`;

  code_6 = `
// Using ES modules in Angular 19
// file: custom-utilities.ts
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Named export
export class StringUtils {
  static truncate(str: string, length: number): string {
    return str.length > length ? str.substring(0, length) + '...' : str;
  }
}

// Default export
export default function logger(message: string): void {
  console.log(\`[LOG]: \${message}\`);
}

// Using the module in a component
import logger, { formatDate, capitalize, StringUtils } from './custom-utilities';

@Component({
  selector: 'app-es-modules',
  template: \`
    <div>
      <p>Date: {{ formattedDate }}</p>
      <p>Name: {{ capitalizedName }}</p>
      <p>Description: {{ truncatedDescription }}</p>
    </div>
  \`
})
export class EsModulesComponent implements OnInit {
  formattedDate = '';
  capitalizedName = '';
  truncatedDescription = '';

  ngOnInit() {
    // Using the imported functions
    this.formattedDate = formatDate(new Date());
    this.capitalizedName = capitalize('angular');
    this.truncatedDescription = StringUtils.truncate(
      'This is a very long description that needs to be truncated to fit the UI',
      30
    );

    // Using the default export
    logger('Component initialized');
  }
}`;
}
