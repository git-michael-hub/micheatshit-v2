import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-zoneless-applications',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './zoneless-applications.component.html',
  styleUrls: ['./zoneless-applications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonelessApplicationsComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Template references for the tabs
  @ViewChild('notesRef') notesRef!: TemplateRef<any>;
  @ViewChild('bestRef') bestRef!: TemplateRef<any>;
  @ViewChild('prosConsRef') prosConsRef!: TemplateRef<any>;
  @ViewChild('topicsRef') topicsRef!: TemplateRef<any>;

  // Code examples for zoneless applications
  basicZonelessAppCode = `// main.ts - Bootstrap without Zone.js
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Configure the application without Zone.js
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    { provide: NgZone, useValue: new NoopNgZone() }
  ]
}).catch(err => console.error(err));`;

  manualChangeDetectionCode = `// Component using manual change detection
import { Component, ChangeDetectorRef, inject } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: \`
    <div>
      <h2>Counter: {{ count }}</h2>
      <button (click)="increment()">Increment</button>
    </div>
  \`
})
export class CounterComponent {
  count = 0;
  private cdr = inject(ChangeDetectorRef);

  increment() {
    this.count++;

    // Manually trigger change detection after updating state
    this.cdr.detectChanges();
  }
}`;

  signalBasedZonelessCode = `// Signal-based component in zoneless application
import { Component, signal, computed, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: \`
    <div>
      <h2>User Profile</h2>
      @if (isLoading()) {
        <p>Loading...</p>
      } @else {
        <div>
          <h3>{{ userName() }}</h3>
          <p>Email: {{ userEmail() }}</p>
        </div>
      }
      <button (click)="refresh()">Refresh</button>
    </div>
  \`
})
export class UserProfileComponent {
  private http = inject(HttpClient);

  // State signals
  private userData = signal<any>(null);
  isLoading = signal(true);

  // Derived state with computed signals
  userName = computed(() => this.userData()?.name || 'Unknown');
  userEmail = computed(() => this.userData()?.email || 'No email');

  constructor() {
    // Load initial data
    this.loadUserData();
  }

  loadUserData() {
    this.isLoading.set(true);

    this.http.get('https://api.example.com/user/1')
      .subscribe({
        next: (data) => {
          this.userData.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Failed to load user data', err);
          this.isLoading.set(false);
        }
      });
  }

  refresh() {
    this.loadUserData();
  }
}`;

  v19EnhancementsCode = `// Angular 19 Zoneless Enhancements

// 1. Application config with zoneless setup
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([/* routes */]),
    provideHttpClient(),
    // New in Angular 19: Easy zoneless setup
    provideZonelessChangeDetection()
  ]
};

// 2. Component with automatic change detection via signals
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: \`
    <div>
      <h1>Dashboard</h1>
      <p>Status: {{ status() }}</p>
      <button (click)="updateStatus()">Update</button>

      <!-- Automatic rendering with control flow -->
      @for (item of items(); track item.id) {
        <div>{{ item.name }}</div>
      }
    </div>
  \`
})
export class DashboardComponent {
  // State managed with signals
  status = signal('Online');
  items = signal([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);

  // Signal-based methods trigger automatic UI updates
  updateStatus() {
    this.status.set('Updated: ' + new Date().toLocaleTimeString());

    // Add a new item
    this.items.update(items => [
      ...items,
      { id: items.length + 1, name: \`Item \${items.length + 1}\` }
    ]);

    // No manual change detection needed!
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Load code examples from files if needed
    // Currently using inline examples
  }
}
