import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-hydration',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './hydration.component.html',
  styleUrls: ['./hydration.component.scss']
})
export class HydrationComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Template references
  @ViewChild('notesRef') notesRef!: TemplateRef<any>;
  @ViewChild('bestRef') bestRef!: TemplateRef<any>;
  @ViewChild('prosConsRef') prosConsRef!: TemplateRef<any>;
  @ViewChild('topicsRef') topicsRef!: TemplateRef<any>;

  // Code examples for hydration
  basicHydrationCode: string = `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration() // Enable application-wide hydration
  ]
};`;

  customHydrationStrategyCode: string = `// custom-hydration-strategy.ts
import { HydrationFeature, HydrationStrategy } from '@angular/core';

export class PrioritizedHydrationStrategy implements HydrationStrategy {
  // Determine if a component should be hydrated
  shouldHydrate(componentId: string, descriptor: any): boolean {
    // Check component priority markers from the descriptor
    if (descriptor?.priority === 'critical') {
      return true; // Always hydrate critical components
    }

    // Delay non-critical components
    if (descriptor?.priority === 'low') {
      return false; // Don't hydrate initially
    }

    return true; // Default to hydrate
  }

  // Called when the strategy decides not to hydrate a component initially
  scheduleHydration(componentId: string, descriptor: any): void {
    if (descriptor?.priority === 'low') {
      // Schedule low-priority hydration after a delay or on user interaction
      setTimeout(() => {
        // Trigger hydration for this component
        this.hydrateComponent(componentId);
      }, 3000); // Delay by 3 seconds
    }
  }

  // Abstract method - would be implemented by Angular
  private hydrateComponent(id: string): void {
    // Angular's internal method to trigger hydration for a specific component
  }
}

// In your app.config.ts
import { provideHydrationFeatures } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideClientHydration(
      provideHydrationFeatures([
        { strategy: PrioritizedHydrationStrategy }
      ])
    )
  ]
};`;

  componentLevelHydrationCode: string = `// In Angular 19, you can control hydration at the component level
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-static-content',
  standalone: true,
  template: \`
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  \`,
  // This component doesn't need interactivity, so disable hydration
  hydration: { mode: 'none' }
})
export class StaticContentComponent {
  title = 'About Our Company';
  description = 'We provide solutions for modern web applications.';
}

@Component({
  selector: 'app-interactive-widget',
  standalone: true,
  template: \`
    <div class="widget">
      <button (click)="increment()">Clicks: {{ count() }}</button>
    </div>
  \`,
  // This component needs immediate interactivity
  hydration: { mode: 'full' }
})
export class InteractiveWidgetComponent {
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }
}

@Component({
  selector: 'app-lazy-content',
  standalone: true,
  template: \`
    <div class="lazy-section">
      <div *ngFor="let item of items">
        <h3>{{ item.title }}</h3>
        <button (click)="selectItem(item)">Select</button>
      </div>
    </div>
  \`,
  // This component will be hydrated when it becomes visible
  hydration: { mode: 'lazy' }
})
export class LazyContentComponent {
  items = [...]; // Some data

  selectItem(item: any) {
    console.log('Selected:', item);
  }
}`;

  v19HydrationEnhancementsCode: string = `// Angular 19 Hydration Enhancements
import { Component, signal } from '@angular/core';

// 1. Fine-grained hydration strategies
@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: \`
    <!-- Critical UI that needs immediate hydration -->
    <app-header hydration="immediate"></app-header>

    <!-- Content can be hydrated when visible -->
    <app-content hydration="visible"></app-content>

    <!-- Static content never needs hydration -->
    <app-footer hydration="none"></app-footer>
  \`
})
export class DashboardComponent {}

// 2. Signal-based selective hydration
@Component({
  selector: 'app-signal-aware',
  standalone: true,
  template: \`
    <!-- Only this part gets hydrated since it uses signals -->
    <div>Count: {{ count() }}</div>

    <!-- This content doesn't depend on signals and won't be hydrated -->
    <div>Static content</div>
  \`,
  // New in Angular 19: Smart signal-aware hydration
  hydration: {
    mode: 'smart',
    signalAware: true
  }
})
export class SignalAwareComponent {
  count = signal(0);
}

// 3. Hydration debugging enhancements
// In your main.ts
import { enableDebugTools } from '@angular/platform-browser';

if (environment.development) {
  enableDebugTools(appRef.components[0], {
    hydration: true // Enable hydration debugging
  });
}

// 4. Automatic hydration optimization with tree-shaking
@Component({
  // Angular 19 automatically optimizes the hydration process
  // by including only the necessary code for hydration
  hydration: {
    optimizeBundles: true
  }
})
export class OptimizedComponent {}`;

  hydrationPerformanceCode: string = `// 1. Measuring hydration performance
import { Component, OnInit } from '@angular/core';
import { HydrationMetrics } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`<div>App Root</div>\`
})
export class AppComponent implements OnInit {
  constructor(private metrics: HydrationMetrics) {}

  ngOnInit() {
    // Log hydration performance metrics
    this.metrics.getHydrationStats().then(stats => {
      console.log('Time to hydrate:', stats.totalTime);
      console.log('Components hydrated:', stats.componentCount);
      console.log('DOM nodes reused:', stats.nodesReused);
      console.log('DOM nodes recreated:', stats.nodesCreated);
    });
  }
}

// 2. Optimizing hydration performance
@Component({
  selector: 'app-optimized',
  template: \`<div>Optimized Component</div>\`,
  // New in Angular 19: Hydration optimization settings
  hydration: {
    // Skip hydration for parts that match server-rendered content
    skipUnchanged: true,
    // Only preserve DOM nodes that have event listeners
    preserveInteractive: true,
    // Set hydration priority (higher numbers are hydrated first)
    priority: 10
  }
})
export class OptimizedComponent {}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Nothing to do here
  }
}
