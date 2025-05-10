import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

// Note: The signal, input, and computed references in the code examples
// are just for demonstration and not actually imported/used in this component

@Component({
  selector: 'app-view-hierarchy',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './view-hierarchy.component.html',
  styleUrls: ['./view-hierarchy.component.scss']
})
export class ViewHierarchyComponent extends UnsubscribeService {
  selectedTab = 1;

  componentViewCode = `// Angular 19 Standalone Component Example
@Component({
  selector: 'app-user-profile',
  standalone: true, // No NgModule required
  imports: [CommonModule],
  template: \`
    <div class="profile">
      <h2>{{ user().name }}</h2>
      <p>{{ user().email }}</p>
      @if (user().isAdmin) {
        <span class="admin-badge">Administrator</span>
      }
    </div>
  \`
})
export class UserProfileComponent {
  // Signal-based input
  user = input<{name: string, email: string, isAdmin: boolean}>();
}`;

  ivyRendererCode = `// Angular 19 Ivy Renderer (internal implementation simplified)
class ComponentInstance {
  // Type info, dependency injection, etc.
  type: Type<any>;
  injector: Injector;

  // View hierarchy references
  hostView: ViewRef;
  contentChildren: QueryList<any>[];
  viewChildren: QueryList<any>[];

  // Component hooks
  onInit(): void { /* ... */ }
  onDestroy(): void { /* ... */ }

  // Change detection
  markForCheck(): void { /* ... */ }
  detectChanges(): void { /* ... */ }
}

// Internally, Ivy maintains a tree structure
// where each component has references to its
// parent, children, and its DOM nodes`;

  viewHierarchyCode = `<!-- Angular 19 View Hierarchy Example -->
<app-dashboard>  <!-- Host View: DashboardComponent -->
  <header>  <!-- Element node in DashboardComponent's view -->
    <app-nav-bar>  <!-- Host View: NavBarComponent -->
      <!-- NavBar Template Content -->
    </app-nav-bar>
  </header>

  <main>  <!-- Element node in DashboardComponent's view -->
    @for (item of items(); track item.id) {
      <!-- Embedded View created for each item -->
      <app-card [item]="item">  <!-- Host View: CardComponent -->
        <!-- Card Template Content -->

        @if (item.hasDetails) {
          <!-- Embedded View created conditionally -->
          <app-details>  <!-- Host View: DetailsComponent -->
            <!-- Details Template Content -->
          </app-details>
        }
      </app-card>
    }
  </main>
</app-dashboard>`;

  encapsulationCode = `// View Encapsulation options in Angular 19
@Component({
  selector: 'app-encapsulated',
  template: \`<h1>Component with Shadow DOM</h1>\`,
  styles: [\`
    h1 {
      color: red;
      /* These styles are scoped to this component only */
    }
  \`],
  encapsulation: ViewEncapsulation.ShadowDom // Uses native Shadow DOM
})
export class ShadowDomComponent { }

@Component({
  selector: 'app-emulated',
  template: \`<h1>Component with Emulated Encapsulation</h1>\`,
  styles: [\`
    h1 {
      color: blue;
      /* Angular adds attributes to scope these styles */
    }
  \`],
  encapsulation: ViewEncapsulation.Emulated // Default
})
export class EmulatedComponent { }

@Component({
  selector: 'app-none',
  template: \`<h1>Component with No Encapsulation</h1>\`,
  styles: [\`
    h1 {
      color: green;
      /* These styles are global */
    }
  \`],
  encapsulation: ViewEncapsulation.None
})
export class NoEncapsulationComponent { }`;

  embeddedViewsCode = `// Angular 19 Embedded Views with Modern Control Flow
@Component({
  selector: 'app-embedded-views-demo',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <h2>Modern Control Flow</h2>

    <!-- @if creates embedded views (replacing *ngIf) -->
    @if (showContent) {
      <div class="content">
        <p>This content is conditionally shown</p>
      </div>
    }

    <!-- @for creates embedded views (replacing *ngFor) -->
    @for (item of items(); track item.id) {
      <div class="item">{{ item.name }}</div>
    }

    <!-- ng-template still used for more complex cases -->
    <ng-template #customTemplate let-data>
      <div>{{ data.message }}</div>
    </ng-template>

    <div #viewContainer></div>
  \`
})
export class EmbeddedViewsDemoComponent implements AfterViewInit {
  showContent = signal(true);
  items = signal([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);

  @ViewChild('viewContainer', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  @ViewChild('customTemplate')
  customTemplate!: TemplateRef<{$implicit: {message: string}}>;

  ngAfterViewInit() {
    // Creating embedded view programmatically
    const context = {$implicit: {message: 'Hello from embedded view!'}};
    const view = this.customTemplate.createEmbeddedView(context);
    this.viewContainer.insert(view);
  }
}`;

  changeDetectionCode = `// Angular 19 Change Detection with Signals
@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <div>
      <h2>Count: {{ count() }}</h2>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  // Signal-based state (Angular 19)
  count = signal(0);

  increment() {
    // Only updates the view elements that depend on count
    this.count.update(value => value + 1);
  }
}

@Component({
  selector: 'app-counter-parent',
  standalone: true,
  imports: [CounterComponent],
  template: \`
    <h1>Parent Component</h1>
    <app-counter />
    <p>This text does not depend on counter state</p>
  \`
})
export class CounterParentComponent {
  // When CounterComponent's count changes,
  // only the counter component view updates
  // The parent component view isn't re-rendered
}`;

  signalViewsCode = `// Angular 19 Signal-Based Component
@Component({
  selector: 'app-stock-tracker',
  standalone: true,
  template: \`
    <div class="stock-card">
      <h3>{{ stockSymbol() }}</h3>
      <p class="price" [class.positive]="priceChange() > 0"
                      [class.negative]="priceChange() < 0">
        {{ price() | currency }}
        <span class="change">{{ priceChange() | number:'+1.2-2' }}%</span>
      </p>

      <p class="update-time">Last updated: {{ lastUpdated() | date:'medium' }}</p>

      <button (click)="refresh()">Refresh</button>
    </div>
  \`
})
export class StockTrackerComponent {
  // Input signals
  stockSymbol = input<string>('AAPL');

  // Computed signals
  price = computed(() => this.stockData().price);
  priceChange = computed(() => this.stockData().percentChange);
  lastUpdated = computed(() => this.stockData().lastUpdated);

  // Private signal state
  private stockData = signal({
    price: 175.25,
    percentChange: 0.75,
    lastUpdated: new Date()
  });

  // No need to trigger change detection manually
  refresh() {
    // Simulate stock data update
    this.stockData.update(data => ({
      price: data.price * (1 + (Math.random() * 0.1 - 0.05)),
      percentChange: (Math.random() * 2 - 1),
      lastUpdated: new Date()
    }));

    // The view automatically updates only what changed
  }
}`;
}
