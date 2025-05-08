import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { takeUntil } from 'rxjs';
import { bootstrapApplication } from '@angular/platform-browser';

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

  // Code snippets
  code_1 = `// Marking a component for partial hydration
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-static-content',
  template: \`
    <div>
      <h2>This component will not be hydrated</h2>
      <p>This content will remain static after server-side rendering</p>
    </div>
  \`,
  standalone: true,
  hydration: {
    componentHydration: false
  }
})
export class StaticContentComponent {}

@Component({
  selector: 'app-root',
  template: \`
    <app-static-content></app-static-content>
    <app-interactive-component></app-interactive-component>
  \`,
  standalone: true,
  imports: [StaticContentComponent]
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration()]
});`;

  code_2 = `// Using componentHydration option in hydration configuration
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainContentComponent, FooterComponent],
  template: \`
    <app-header></app-header>
    <app-main-content></app-main-content>
    <app-footer></app-footer>
  \`
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration({
      componentHydration: (def) => {
        // Only hydrate interactive components
        if (def === HeaderComponent || def === FooterComponent) {
          // Static components - no hydration needed
          return false;
        }
        // Other components will be hydrated
        return true;
      }
    })
  ]
});`;

  code_3 = `// Angular 19 hydration with Islands architecture pattern
import { bootstrapApplication } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration({
      // Hydration strategy for components
      componentHydration: (componentDef) => {
        // Check component metadata for hydration preference
        const hydrationMetadata = componentDef.type['__hydration'];

        if (hydrationMetadata?.skip) {
          // Skip hydration for static components
          return false;
        }

        if (hydrationMetadata?.priority === 'low') {
          // Queue low-priority components for delayed hydration
          queueMicrotask(() => {
            // Logic to hydrate later
          });
          return false;
        }

        // Default: hydrate normally
        return true;
      },

      // Skip attribute hydration for specific attributes
      attributeHydration: (element, attributeName) => {
        // Skip hydration for static attributes
        return !attributeName.startsWith('data-static');
      }
    })
  ]
});`;

  code_4 = `// Selective Islands hydration component decorator
import { Component, Input } from '@angular/core';

// Custom decorator factory for Islands architecture
export function Island(options: {
  hydrate: boolean | 'lazy' | 'idle' | 'visible',
  prerender?: boolean
} = { hydrate: true, prerender: true }) {

  return function(target: any) {
    // Store hydration metadata on the component class
    target['__hydration'] = {
      hydrate: options.hydrate,
      prerender: options.prerender
    };

    // Original component remains unchanged
    return target;
  };
}

// Usage example
@Island({ hydrate: 'visible' })
@Component({
  selector: 'app-comments-section',
  template: \`
    <div class="comments-section">
      <h3>Comments</h3>
      <ul>
        <li *ngFor="let comment of comments">{{ comment.text }}</li>
      </ul>
      <button (click)="addComment()">Add Comment</button>
    </div>
  \`
})
export class CommentsSectionComponent {
  @Input() comments: any[] = [];

  addComment() {
    // Interactive functionality
  }
}`;

  // Template references
  @ViewChild('code1') code1!: ElementRef;
  @ViewChild('code2') code2!: ElementRef;
  @ViewChild('code3') code3!: ElementRef;
  @ViewChild('code4') code4!: ElementRef;
  @ViewChild('notesRef') notesRef!: ElementRef;
  @ViewChild('bestRef') bestRef!: ElementRef;
  @ViewChild('prosConsRef') prosConsRef!: ElementRef;
  @ViewChild('topicsRef') topicsRef!: ElementRef;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Load code examples from files if needed
    // Currently using inline examples
  }
}
