import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-view-transitions',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './view-transitions.component.html',
  styleUrls: ['./view-transitions.component.scss']
})
export class ViewTransitionsComponent extends UnsubscribeService {
  selectedTab = 1;

  basicExampleCode = `// In the component
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  animations: [
    trigger('viewTransition', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  // Component code
}

// In the template
<div [@viewTransition]="currentRoute">
  <router-outlet></router-outlet>
</div>`;

  routerExampleCode = `// app-routing.module.ts
import { provideRouter, withViewTransitions } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions() // Enable view transitions
    )
  ]
};`;

  customTransitionsCode = `// app-routing.module.ts
import { provideRouter, withViewTransitions } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true, // Skip transition on initial load
        onViewTransitionCreated: (transitionInfo) => {
          // Custom logic when transition is created
          console.log('View transition created:', transitionInfo);
        }
      })
    )
  ]
};`;

  targetedTransitionsCode = `// In component
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: \`
    <div class="container">
      <a routerLink="/page1"
         [viewTransition]="'slide-right'">Page 1</a>
      <a routerLink="/page2"
         [viewTransition]="'slide-left'">Page 2</a>

      <router-outlet />
    </div>
  \`,
  standalone: true,
  imports: [RouterOutlet, RouterLink]
})
export class AppComponent {}`;

  cssTransitionsCode = `/* styles.css */
/* Default transition for all page changes */
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
}

/* Custom transition for specific elements */
::view-transition-old(hero-image),
::view-transition-new(hero-image) {
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
}

/* Different transitions based on direction */
html[data-transition="slide-right"] {
  & ::view-transition-old(root) {
    animation-name: slide-out-left;
  }
  & ::view-transition-new(root) {
    animation-name: slide-in-right;
  }
}

html[data-transition="slide-left"] {
  & ::view-transition-old(root) {
    animation-name: slide-out-right;
  }
  & ::view-transition-new(root) {
    animation-name: slide-in-left;
  }
}

/* Animation keyframes */
@keyframes slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slide-out-left {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}

@keyframes slide-in-left {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes slide-out-right {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}`;

  sharedElementsCode = `<!-- Page 1: Product List -->
<div class="product-list">
  <a routerLink="/product/1">
    <div class="product-card">
      <!-- The same view-transition-name will create a shared element transition -->
      <img
        style="view-transition-name: product-image-1"
        src="product1.jpg"
        alt="Product 1">
      <h3>Product 1</h3>
    </div>
  </a>
</div>

<!-- Page 2: Product Detail -->
<div class="product-detail">
  <!-- The matching view-transition-name creates continuity -->
  <img
    style="view-transition-name: product-image-1"
    src="product1-large.jpg"
    alt="Product 1 Large">

  <div class="product-info">
    <h1>Product 1</h1>
    <p>Product description here...</p>
  </div>
</div>`;
}
