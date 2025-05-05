import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-signal-components',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './signal-components.component.html',
  styleUrls: ['./signal-components.component.scss']
})
export class SignalComponentsComponent {
  selectedTab = 1;

  // Template references for the tabs
  @ViewChild('notesRef') notesRef!: TemplateRef<any>;
  @ViewChild('bestRef') bestRef!: TemplateRef<any>;
  @ViewChild('prosConsRef') prosConsRef!: TemplateRef<any>;
  @ViewChild('topicsRef') topicsRef!: TemplateRef<any>;

  // Code samples for signal components
  basicSignalComponentCode = `import { Component, input, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div>
      <h2>Counter: {{ count() }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  \`
})
export class CounterComponent {
  // Input signal with default value
  max = input(100);

  // Required input signal
  min = input.required<number>();

  // Model signal for two-way binding
  count = model(0);

  // Output signal for events
  countChanged = output<number>();

  increment() {
    if (this.count() < this.max()) {
      this.count.update(value => value + 1);
      this.countChanged.emit(this.count());
    }
  }

  decrement() {
    if (this.count() > this.min()) {
      this.count.update(value => value - 1);
      this.countChanged.emit(this.count());
    }
  }
}`;

  signalComponentFeaturesCode = `import { Component, input, output, model, viewChild, viewChildren, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div>
      <h2>Items ({{ filteredItems().length }} of {{ items().length }})</h2>

      <label>
        Filter by category:
        <select #categoryFilter (change)="category.set(categoryFilter.value)">
          <option value="">All</option>
          <option *ngFor="let cat of categories()" [value]="cat">{{ cat }}</option>
        </select>
      </label>

      <ul>
        <li *ngFor="let item of filteredItems()" #itemRef>
          {{ item.name }} - {{ item.category }}
        </li>
      </ul>

      <p>Total value: {{ totalValue() }}</p>
    </div>
  \`
})
export class ItemListComponent {
  // Inject service
  private itemService = inject(ItemService);

  // Input with transform
  items = input<Item[]>([], {
    transform: (items: Item[]) => items.sort((a, b) => a.name.localeCompare(b.name))
  });

  // View child as signal
  categorySelect = viewChild<HTMLSelectElement>('categoryFilter');

  // View children as signal
  itemElements = viewChildren<HTMLLIElement>('itemRef');

  // Local signal state
  category = signal('');

  // Computed values
  categories = computed(() => {
    const uniqueCategories = new Set<string>();
    this.items().forEach(item => uniqueCategories.add(item.category));
    return Array.from(uniqueCategories).sort();
  });

  filteredItems = computed(() => {
    const currentCategory = this.category();
    if (!currentCategory) return this.items();
    return this.items().filter(item => item.category === currentCategory);
  });

  totalValue = computed(() => {
    return this.filteredItems().reduce((sum, item) => sum + item.price, 0);
  });

  constructor() {
    // Effect for side effects (e.g., analytics)
    effect(() => {
      this.itemService.logCategoryChange(this.category());
    });

    // Effect with cleanup
    effect((onCleanup) => {
      const handler = () => this.category.set('');
      window.addEventListener('reset-filters', handler);

      // Return cleanup function
      onCleanup(() => {
        window.removeEventListener('reset-filters', handler);
      });
    });
  }
}

interface Item {
  name: string;
  category: string;
  price: number;
}`;

  signalComponentPerformanceCode = `import { Component, input, computed, untracked, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-performance-example',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div>
      <h2>Performance Optimized Component</h2>
      <p>Active items: {{ activeItemCount() }}</p>
      <p>Rendering {{ visibleItems().length }} of {{ untracked(items).length }} items</p>

      <ul>
        <li *ngFor="let item of visibleItems()">
          {{ item.name }} - {{ item.status }}
        </li>
      </ul>
    </div>
  \`
})
export class PerformanceExampleComponent {
  // Input signals
  items = input<Item[]>([]);
  filterActive = input(true);

  // Memoize expensive operations
  private itemsMap = computed(() => {
    console.log('Building items map - expensive operation');
    const map = new Map<string, Item>();
    this.items().forEach(item => map.set(item.id, item));
    return map;
  });

  // Computed that depends on a subset of signals
  activeItemCount = computed(() => {
    // Using untracked to avoid dependency on the entire items array
    // when we only care about the count of active items
    return untracked(this.items).filter(item => item.status === 'active').length;
  });

  // Optimized computation that tracks only relevant dependencies
  visibleItems = computed(() => {
    const showActive = this.filterActive();

    // Only re-compute when filterActive changes or items relevantly change
    if (showActive) {
      return this.items().filter(item => item.status === 'active');
    } else {
      return this.items();
    }
  });

  // Getting a single item without tracking the entire items array
  getItem(id: string): Item | undefined {
    return this.itemsMap().get(id);
  }
}

interface Item {
  id: string;
  name: string;
  status: 'active' | 'inactive';
}`;

  v19EnhancementsCode = `import { Component, input, output, model, viewChild, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular 19 component (fully reactive, standalone by default)
@Component({
  selector: 'app-v19-counter',
  // Standalone is now the default in Angular 19
  // No need for imports array with automatic module detection
  template: \`
    <div>
      <h2>Enhanced Counter: {{ count() }}</h2>
      <p>Squared value: {{ squared() }}</p>

      <div class="controls">
        <button (click)="increment()">Increment</button>
        <button (click)="reset()">Reset to Initial</button>
      </div>

      <div class="config" *ngIf="showConfig()">
        <label>
          Initial Value:
          <input type="number" [value]="initialValue()"
                (input)="setInitialValue($event)">
        </label>
        <button (click)="applyInitialValue()">Apply</button>
      </div>

      <button (click)="toggleConfig()">
        {{ showConfig() ? 'Hide' : 'Show' }} Config
      </button>
    </div>
  \`
})
export class V19CounterComponent {
  // Input with validation and transform
  initialValue = input(0, {
    // Additional type checking with alias support
    alias: 'startValue',
    transform: (value: number) => {
      // Validate and transform input
      return Math.max(0, Math.round(value));
    }
  });

  // Private signals
  #count = signal(this.initialValue());
  #showConfig = signal(false);

  // Public API (readonly for template)
  count = this.#count.asReadonly();
  showConfig = this.#showConfig.asReadonly();

  // Two-way binding model
  theme = model<'light' | 'dark'>('light');

  // Computed value
  squared = computed(() => this.count() * this.count());

  // ViewChild as signal
  counterDisplay = viewChild<HTMLHeadingElement>('counterDisplay');

  // Methods
  increment() {
    this.#count.update(c => c + 1);
  }

  reset() {
    this.#count.set(this.initialValue());
  }

  toggleConfig() {
    this.#showConfig.update(show => !show);
  }

  setInitialValue(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.initialValue.set(value);
  }

  applyInitialValue() {
    this.reset();
  }
}`;
}
