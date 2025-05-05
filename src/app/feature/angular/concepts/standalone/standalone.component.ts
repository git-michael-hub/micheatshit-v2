import { CommonModule } from '@angular/common';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss']
})
export class StandaloneComponent extends UnsubscribeService {
  selectedTab = 'notes';

  @ViewChild('notesTemplate', { static: true }) notesTemplate!: TemplateRef<any>;
  @ViewChild('bestPracticesTemplate', { static: true }) bestPracticesTemplate!: TemplateRef<any>;
  @ViewChild('prosConsTemplate', { static: true }) prosConsTemplate!: TemplateRef<any>;
  @ViewChild('relatedTopicsTemplate', { static: true }) relatedTopicsTemplate!: TemplateRef<any>;

  standaloneComponentCode = `// Standalone component example
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UserProfileComponent } from './user-profile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    UserProfileComponent
  ],
  template: \`
    <div class="dashboard">
      <h1>Welcome to your Dashboard</h1>
      <app-user-profile></app-user-profile>
      <button mat-button>View Statistics</button>
    </div>
  \`
})
export class DashboardComponent { }`;

  bootstrapCode = `// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
}).catch(err => console.error(err));`;

  standaloneRoutesCode = `// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component')
      .then(c => c.DashboardComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.component')
      .then(c => c.SettingsComponent)
  }
];`;

  providersCode = `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations()
  ]
};`;

  dependencyInjectionCode = `// Dependency injection in standalone components
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div *ngIf="user$ | async as user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  \`
})
export class UserProfileComponent {
  // Inject service using the inject function
  private userService = inject(UserService);
  user$ = this.userService.getCurrentUser();
}`;
}
