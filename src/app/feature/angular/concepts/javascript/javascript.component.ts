import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent extends UnsubscribeService implements OnInit {
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
  code_1 = `// Modern JavaScript (ES6+) Features in Angular 19
// Arrow Functions
const getFullName = (firstName, lastName) => \`\${firstName} \${lastName}\`;

// Template Literals
const greeting = \`Hello, \${getFullName('Angular', 'Dev')}!\`;

// Destructuring
const { name, version } = { name: 'Angular', version: 19 };

// Spread Operator
const baseConfig = { production: true };
const fullConfig = { ...baseConfig, enableDebug: false };

// Optional Chaining and Nullish Coalescing
const userDisplayName = user?.name ?? 'Guest';

// Async/Await
const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
};`;

  code_2 = `// TypeScript in Angular 19
// Type Annotations
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  roles?: string[];
}

// Class with TypeScript features
class UserService {
  private users: User[] = [];

  constructor(private apiUrl: string) {}

  // Method with Promise and typed return
  async getUser(id: number): Promise<User | undefined> {
    if (this.users.length > 0) {
      return this.users.find(user => user.id === id);
    }

    const response = await fetch(\`\${this.apiUrl}/users/\${id}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const user: User = await response.json();
    this.users.push(user);
    return user;
  }

  // Function with typed parameters
  updateUser(id: number, updates: Partial<User>): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updates };
    }
  }
}`;

  code_3 = `// Working with Zone.js in Angular 19
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-example',
  template: \`
    <div>
      <p>Counter: {{ '{{' }} counter {{ '}}' }}</p>
      <button (click)="incrementInZone()">Increment (In Zone)</button>
      <button (click)="incrementOutsideZone()">Increment (Outside Zone)</button>
    </div>
  \`
})
export class ZoneExampleComponent {
  counter = 0;

  constructor(private ngZone: NgZone) {}

  // This runs inside Angular's zone and triggers change detection
  incrementInZone(): void {
    this.counter++;
    console.log('In Zone: Change detection will be triggered');
  }

  // This runs outside Angular's zone and doesn't trigger change detection
  incrementOutsideZone(): void {
    this.ngZone.runOutsideAngular(() => {
      this.counter++;
      console.log('Outside Zone: Change detection will NOT be triggered');

      // If we need to update the UI, we can explicitly run inside the zone
      if (this.counter % 10 === 0) {
        this.ngZone.run(() => {
          console.log('Back in zone: Change detection will be triggered');
        });
      }
    });
  }
}`;

  code_4 = `// JavaScript Interoperability in Angular 19
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Using third-party JavaScript libraries with Angular 19
@Component({
  selector: 'app-chart',
  template: \`
    <div>
      <canvas #chartCanvas width="400" height="200"></canvas>
    </div>
  \`
})
export class ChartComponent implements OnInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: any; // Will hold the Chart.js instance

  ngOnInit(): void {
    // We'll load Chart.js dynamically
    this.loadChartJs().then(() => {
      this.initializeChart();
    });
  }

  // Dynamically load external JavaScript library
  private async loadChartJs(): Promise<void> {
    if (!(window as any).Chart) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
      script.async = true;
      document.body.appendChild(script);

      return new Promise((resolve) => {
        script.onload = () => resolve();
      });
    }
    return Promise.resolve();
  }

  private initializeChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    // Using the global Chart object from the loaded library
    this.chart = new (window as any).Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Sample Data',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ]
        }]
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up the chart instance when component is destroyed
    if (this.chart) {
      this.chart.destroy();
    }
  }
}`;

  code_5 = `// Modern JavaScript Patterns in Angular 19
// Using the Nullish Coalescing Operator with Signals
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-modern-js',
  template: \`
    <div>
      <p>Name: {{ '{{' }} displayName() {{ '}}' }}</p>
      <p>Role: {{ '{{' }} role() {{ '}}' }}</p>
      <button (click)="clearUserData()">Clear</button>
      <button (click)="resetUserData()">Reset</button>
    </div>
  \`
})
export class ModernJsComponent {
  // Signals with default values
  private userData = signal<{ name: string | null, role: string | null }>({
    name: 'John Doe',
    role: 'Developer'
  });

  // Derived signals with nullish coalescing
  displayName = signal(() => this.userData().name ?? 'Guest');
  role = signal(() => this.userData().role ?? 'Unknown');

  clearUserData(): void {
    this.userData.update(current => ({
      ...current,
      name: null,
      role: null
    }));
  }

  resetUserData(): void {
    // Using object destructuring and shorthand property names
    const { name, role } = { name: 'John Doe', role: 'Developer' };
    this.userData.set({ name, role });
  }
}`;

  code_6 = `// JavaScript Performance Optimization in Angular 19
import { Component, signal, computed, effect, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  template: \`
    <div>
      <h3>Items ({{ '{{' }} filteredItems().length {{ '}}' }})</h3>
      <input
        [value]="searchTerm()"
        (input)="updateSearch($event)"
        placeholder="Search items..."
      >
      <ul>
        <li *ngFor="let item of filteredItems()">{{ '{{' }} item {{ '}}' }}</li>
      </ul>
      <button (click)="addItem()">Add Item</button>
    </div>
  \`
})
export class PerformanceComponent implements OnInit {
  // Using signals for reactive state
  items = signal<string[]>([
    'Angular', 'JavaScript', 'TypeScript', 'RxJS', 'Zone.js'
  ]);
  searchTerm = signal('');

  // Computed value only recalculated when dependencies change
  filteredItems = computed(() => {
    console.log('Filtering items...');
    const term = this.searchTerm().toLowerCase();
    return term
      ? this.items().filter(item => item.toLowerCase().includes(term))
      : this.items();
  });

  // Set up effects for side operations
  ngOnInit(): void {
    // Effect runs when dependencies change
    effect(() => {
      const count = this.filteredItems().length;
      console.log(\`Found \${count} items matching "\${this.searchTerm()}"\`);

      // Could also log analytics here
      this.logSearch(this.searchTerm(), count);
    });
  }

  // Debounced search input handler
  private debounceTimer: any = null;
  updateSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    // Debounce to avoid excessive calculations
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.searchTerm.set(value);
    }, 300);
  }

  // Generate a unique item name
  addItem(): void {
    const newItem = \`Item \${Date.now().toString().slice(-4)}\`;
    // Immutable update pattern
    this.items.update(current => [...current, newItem]);
  }

  // Analytics logging (simulated)
  private logSearch(term: string, resultCount: number): void {
    // Using Web Performance API to measure
    const perfNow = performance.now();
    console.log(\`[ANALYTICS] Search: "\${term}" - \${resultCount} results - \${perfNow.toFixed(2)}ms\`);
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Initialize code snippets if needed
  }
}
