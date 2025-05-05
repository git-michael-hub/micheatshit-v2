import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-partial-hydration',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './partial-hydration.component.html',
  styleUrls: ['./partial-hydration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartialHydrationComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Code examples for partial hydration
  basicHydrationCode = `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration() // Enable hydration for the entire application
  ]
};`;

  partialHydrationCode = `<!-- Using partial hydration with selective hydration -->
<div>
  <!-- This component will be hydrated -->
  <app-interactive-counter hydration="on"></app-interactive-counter>

  <!-- This component will remain static, never hydrated -->
  <app-static-content hydration="off"></app-static-content>

  <!-- This component will be hydrated only after user interaction -->
  <app-lazy-dashboard hydration="user-interactive"></app-lazy-dashboard>
</div>`;

  hydrationStrategyCode = `// Progressive hydration strategy in Angular 19
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHydrationStrategy, HydrationStrategy } from '@angular/core';

// Custom progressive hydration strategy
class MyProgressiveStrategy implements HydrationStrategy {
  shouldHydrateComponent(element: Element): boolean {
    // Only hydrate components with specific attributes or in viewport
    return element.hasAttribute('priority-hydrate') || this.isInViewport(element);
  }

  shouldHydrateChildren(element: Element): boolean {
    // Don't automatically hydrate children of lazy sections
    return !element.hasAttribute('lazy-section');
  }

  private isInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  }
}

// Provide custom hydration strategy
@NgModule({
  imports: [BrowserModule],
  providers: [
    provideClientHydration(),
    provideHydrationStrategy(MyProgressiveStrategy)
  ]
})
export class AppModule { }`;

  v19EnhancementsCode = `// Angular 19 Enhanced Partial Hydration Features

// 1. Component-level hydration control
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div>
      <header>Dashboard</header>

      <!-- Island architecture with selective hydration -->
      <div class="widget" hydration="on">
        <app-interactive-chart [data]="chartData"></app-interactive-chart>
      </div>

      <div class="content" hydration="off">
        <app-static-article></app-static-article>
      </div>

      <div class="comments" hydration="when-visible">
        <app-comments-section></app-comments-section>
      </div>
    </div>
  \`,
  hydration: {
    strategy: 'selective',
    defaultMode: 'off'
  }
})
export class DashboardComponent { }

// 2. Integration with signals for fine-grained reactivity
@Component({
  selector: 'app-analytics',
  standalone: true,
  template: \`
    <div>
      <!-- Only the counter updates, rest stays static -->
      <h2>Visitors: {{ visitorCount() }}</h2>
      <div hydration="off">Static analytics visualization</div>
    </div>
  \`,
  hydration: 'minimal'
})
export class AnalyticsComponent {
  visitorCount = signal(0);
  // ...
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Load code examples from files if needed
    // Currently using inline examples
  }
}
