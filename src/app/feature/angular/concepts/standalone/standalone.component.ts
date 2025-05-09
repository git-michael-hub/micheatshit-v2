import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  selectedTab = 1;

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

  signalIntegrationCode = `// Signal-based standalone component
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="counter">
      <h2>Counter: {{ count() }}</h2>
      <p>Doubled value: {{ doubledCount() }}</p>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
    </div>
  \`
})
export class CounterComponent {
  // Signal-based state
  count = signal(0);

  // Computed signal
  doubledCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}`;

  dependencyInjectionCode = `// Dependency injection in standalone components
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div *ngIf="user()">
      <h2>{{ user().name }}</h2>
      <p>{{ user().email }}</p>
    </div>
  \`
})
export class UserProfileComponent {
  // Inject service using the inject function
  private userService = inject(UserService);

  // Signal-based state from service
  user = this.userService.currentUser;
}`;
}
