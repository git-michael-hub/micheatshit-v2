import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentComponent extends UnsubscribeService {

  selectedTab = 1;

  @ViewChild('basicComponentCodeEl') basicComponentCodeEl?: ElementRef;
  @ViewChild('signalComponentCodeEl') signalComponentCodeEl?: ElementRef;
  @ViewChild('lifecycleHooksCodeEl') lifecycleHooksCodeEl?: ElementRef;
  @ViewChild('deferredComponentsCodeEl') deferredComponentsCodeEl?: ElementRef;

  // Code examples
  basicComponentCode = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="greeting">
      <h2>Hello, {{ name }}!</h2>
      <p>Welcome to Angular 19</p>
      <button (click)="updateName()">Change Name</button>
    </div>
  \`,
  styles: [\`
    .greeting {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    h2 {
      color: #333;
    }
    button {
      background: #0066cc;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
  \`]
})
export class GreetingComponent {
  name = 'World';

  updateName() {
    this.name = 'Angular Developer';
  }
}`;

  signalComponentCode = `import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="counter-container">
      <h2>Signal-based Counter</h2>

      <p>Current count: {{ count() }}</p>
      <p>Doubled value: {{ doubled() }}</p>

      <div class="actions">
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset</button>
      </div>

      <div class="custom-value">
        <label for="customValue">Set custom value:</label>
        <input
          id="customValue"
          type="number"
          [ngModel]="count()"
          (ngModelChange)="updateCount($event)"
        >
      </div>

      <div class="log-container">
        <h3>Effect Log:</h3>
        <ul>
          <li *ngFor="let entry of logEntries()">{{ entry }}</li>
        </ul>
      </div>
    </div>
  \`,
  styles: [\`
    .counter-container {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 400px;
    }
    .actions {
      display: flex;
      gap: 0.5rem;
      margin: 1rem 0;
    }
    button {
      background: #0066cc;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .custom-value {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .log-container {
      margin-top: 1rem;
      border-top: 1px solid #eee;
      padding-top: 1rem;
    }
  \`]
})
export class CounterComponent {
  // Signal state
  count = signal<number>(0);
  logEntries = signal<string[]>([]);

  // Computed value derived from state
  doubled = computed(() => this.count() * 2);

  constructor() {
    // Effect to log changes
    effect(() => {
      const currentCount = this.count();
      const newEntry = \`Count changed to: \${currentCount} at \${new Date().toLocaleTimeString()}\`;
      this.logEntries.update(entries => [newEntry, ...entries.slice(0, 4)]);
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }

  updateCount(newValue: number) {
    this.count.set(newValue);
  }
}`;

  lifecycleHooksCode = `import { Component, OnInit, OnDestroy, AfterViewInit,
  OnChanges, SimpleChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="lifecycle-container">
      <h2>Component Lifecycle Demo</h2>
      <p>Current status: {{ status }}</p>
      <div class="log-container">
        <h3>Lifecycle Log:</h3>
        <ul>
          <li *ngFor="let entry of lifecycleLog" [class.highlighted]="entry.includes('ngOnInit')">
            {{ entry }}
          </li>
        </ul>
      </div>
      <button (click)="triggerChange()">Trigger Change</button>
    </div>
  \`,
  styles: [\`
    .lifecycle-container {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 500px;
    }
    .log-container {
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid #eee;
      padding: 0.5rem;
      margin: 1rem 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 0.25rem 0;
      border-bottom: 1px solid #f5f5f5;
    }
    li.highlighted {
      background-color: #fffde7;
      font-weight: bold;
    }
    button {
      background: #0066cc;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
  \`]
})
export class LifecycleDemoComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() name: string = 'Component';
  status: string = 'Initializing';
  lifecycleLog: string[] = [];
  private intervalId: any;

  constructor() {
    this.logLifecycleEvent('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logLifecycleEvent(\`ngOnChanges - name: \${changes['name']?.currentValue}\`);
  }

  ngOnInit(): void {
    this.logLifecycleEvent('ngOnInit');
    this.status = 'Running';

    // Set up an interval to demonstrate component activity
    this.intervalId = setInterval(() => {
      this.logLifecycleEvent('Interval tick');
    }, 5000);
  }

  ngAfterViewInit(): void {
    this.logLifecycleEvent('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    this.logLifecycleEvent('ngOnDestroy');
    clearInterval(this.intervalId);
    this.status = 'Destroyed';
  }

  triggerChange(): void {
    this.name = \`Updated \${new Date().toLocaleTimeString()}\`;
    this.logLifecycleEvent(\`Manual update triggered\`);
  }

  private logLifecycleEvent(event: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.lifecycleLog = [\`\${timestamp}: \${event}\`, ...this.lifecycleLog.slice(0, 9)];
  }
}`;

  deferredComponentsCode = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deferred-demo',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="deferred-container">
      <h2>Deferred Loading Demo</h2>
      <p>This component demonstrates Angular 19's deferrable views</p>

      <div class="controls">
        <button (click)="showCharts = !showCharts">
          {{ showCharts ? 'Hide' : 'Show' }} Charts
        </button>
      </div>

      @defer (when showCharts) {
        <div class="chart-container">
          <h3>Heavy Chart Component Loaded</h3>
          <div class="chart-placeholder">
            <!-- Chart would render here -->
            <div class="chart"></div>
            <p>Chart data loaded at: {{ currentTime }}</p>
          </div>
        </div>
      } @loading {
        <div class="loading-indicator">
          <p>Loading charts...</p>
          <div class="spinner"></div>
        </div>
      } @placeholder {
        <div class="placeholder">
          <p>Click the button to load charts</p>
        </div>
      } @error {
        <div class="error">
          <p>Error loading charts component!</p>
        </div>
      }
    </div>
  \`,
  styles: [\`
    .deferred-container {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      max-width: 600px;
    }
    .controls {
      margin: 1rem 0;
    }
    button {
      background: #0066cc;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .chart-container {
      padding: 1rem;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-top: 1rem;
    }
    .chart-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .chart {
      width: 300px;
      height: 200px;
      background: linear-gradient(to right, #e66465, #9198e5);
      border-radius: 4px;
    }
    .loading-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
    }
    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .placeholder, .error {
      padding: 2rem;
      text-align: center;
      border: 1px dashed #ccc;
      border-radius: 4px;
    }
    .error {
      border-color: #e74c3c;
      color: #e74c3c;
    }
  \`]
})
export class DeferredDemoComponent {
  showCharts = false;

  get currentTime(): string {
    return new Date().toLocaleTimeString();
  }
}`;

  ngOnInit() {
    // Any initialization code if needed
  }
}
