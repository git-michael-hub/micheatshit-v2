import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './deferrable-views.component.html',
  styleUrls: ['./deferrable-views.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferrableViewsComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Code examples for deferrable views
  basicDeferCode = `<!-- Basic @defer syntax -->
<section>
  <header>Always rendered content</header>

  @defer {
    <!-- Heavy component only loaded when needed -->
    <app-data-visualization [data]="complexData"></app-data-visualization>
  } @loading {
    <p>Loading visualization...</p>
  } @error {
    <p>Error loading visualization component</p>
  } @placeholder {
    <div class="placeholder-box">Visualization will appear here</div>
  }
</section>`;

  triggerConditionsCode = `<!-- Different trigger conditions -->
<!-- Load when element becomes visible -->
@defer (on viewport) {
  <app-comments [postId]="postId"></app-comments>
}

<!-- Load when user interaction occurs -->
@defer (on interaction) {
  <app-interactive-map></app-interactive-map>
}

<!-- Load when specific condition is met -->
@defer (when isUserLoggedIn) {
  <app-user-dashboard></app-user-dashboard>
}

<!-- Load after timer expires -->
@defer (on timer(2000)) {
  <app-newsletter-signup></app-newsletter-signup>
}

<!-- Load during idle browser time -->
@defer (on idle) {
  <app-related-posts></app-related-posts>
}`;

  prefetchingCode = `<!-- Prefetching strategies -->
<!-- Fetch on idle but render on viewport -->
@defer (on viewport; prefetch on idle) {
  <app-product-recommendations></app-product-recommendations>
}

<!-- Fetch when hovering somewhere, render when in viewport -->
@defer (on viewport; prefetch on hover(buyButton)) {
  <app-checkout-options></app-checkout-options>
}

<!-- Fetch immediately but render only when condition is met -->
@defer (when isCartFull; prefetch on immediate) {
  <app-special-offers></app-special-offers>
}`;

  v19EnhancementsCode = `// Angular 19 Enhanced Deferrable Views Features

// 1. Minimum rendering time to prevent flashing
@defer (on viewport; minimum 300ms) {
  <app-content-section></app-content-section>
}

// 2. Progressive hydration integration
@defer (on viewport; hydration: partial) {
  <app-server-rendered-content></app-server-rendered-content>
}

// 3. Loading skeleton with data access
@defer {
  <app-user-profile [data]="userData"></app-user-profile>
} @loading (minimum 500ms) {
  <app-profile-skeleton [userName]="userData.name"></app-profile-skeleton>
}

// 4. Signals integration for dynamic conditions
@defer (when userPermissions.admin()) {
  <app-admin-dashboard></app-admin-dashboard>
}

// 5. Priority hints for browser loading
@defer (on viewport; priority: high) {
  <app-critical-content></app-critical-content>
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Load code examples from files if needed
    // Currently using inline examples
  }
}
