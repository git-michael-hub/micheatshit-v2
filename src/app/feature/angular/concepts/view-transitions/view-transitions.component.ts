import { CommonModule } from '@angular/common';
import { Component, ViewChild, TemplateRef } from '@angular/core';
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
  selectedTab = 'notes';

  @ViewChild('notesTemplate', { static: true }) notesTemplate!: TemplateRef<any>;
  @ViewChild('bestPracticesTemplate', { static: true }) bestPracticesTemplate!: TemplateRef<any>;
  @ViewChild('prosConsTemplate', { static: true }) prosConsTemplate!: TemplateRef<any>;
  @ViewChild('relatedTopicsTemplate', { static: true }) relatedTopicsTemplate!: TemplateRef<any>;

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
export class AppComponent {}`
}
