import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-injector',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './injector.component.html',
  styleUrls: ['./injector.component.scss']
})
export class InjectorComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Template reference variables
  code_1_ref: any = { hidden: true };
  code_2_ref: any = { hidden: true };
  code_3_ref: any = { hidden: true };
  code_4_ref: any = { hidden: true };
  code_5_ref: any = { hidden: true };
  code_6_ref: any = { hidden: true };

  // Template outlet references
  notesRef: any;
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;

  // Example code snippets
  code_1 = `// Getting the injector in Angular 19
import { Component, Injector, inject } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-example',
  template: \`<div>{{ message }}</div>\`
})
export class ExampleComponent {
  // Method 1: Using the inject function (recommended in Angular 19)
  private logger = inject(LoggerService);
  message = 'Injector example';

  // Method 2: Injecting the Injector itself
  constructor(private injector: Injector) {
    // Manually getting a service instance from the injector
    const loggerFromInjector = this.injector.get(LoggerService);
    loggerFromInjector.log('Component initialized with injector');

    // Using the logger injected with the inject() function
    this.logger.log('Component initialized with inject()');
  }
}`;

  code_2 = `// Hierarchical Injectors in Angular 19
import { Component, Injector, inject } from '@angular/core';

// 1. Root Injector - Provided by Angular through bootstrapApplication
// Can be configured in main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: 'API_URL', useValue: 'https://api.example.com' },
    // These services will be available to all components
    GlobalService,
    { provide: LogLevel, useValue: 'production' }
  ]
});

// 2. Module Injector (for NgModule-based apps)
@NgModule({
  providers: [
    ModuleLevelService,
    { provide: FEATURE_FLAG, useValue: true }
  ]
})
export class FeatureModule {}

// 3. Element Injector - Provided in component decorators
@Component({
  selector: 'app-feature',
  providers: [
    // This service is only available to this component
    // and its descendants
    FeatureService,
    {
      provide: ParentService,
      useClass: CustomizedService
    }
  ]
})
export class FeatureComponent {
  // This component has access to:
  // 1. Services from its own providers
  // 2. Services from parent components
  // 3. Services from any parent modules
  // 4. Services from the root injector
}`;

  code_3 = `// Standalone component injection in Angular 19
import { Component, importProvidersFrom, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  providers: [
    // Local providers for this component only
    UserService,
    // Import providers from modules
    importProvidersFrom(HttpClientModule)
  ],
  template: \`
    <div *ngIf="user$ | async as user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  \`
})
export class UserProfileComponent {
  // Inject dependencies using the inject function
  private userService = inject(UserService);
  private http = inject(HttpClient);

  // Use the injected services
  user$ = this.userService.getCurrentUser();
}

// In main.ts
bootstrapApplication(AppComponent, {
  providers: [
    // Global providers
    provideRouter([...])
  ]
});`;

  code_4 = `// Advanced injector techniques in Angular 19
import { Injector, InjectionToken, inject, runInInjectionContext } from '@angular/core';

// 1. InjectionTokens for non-class dependencies
export const CACHE_SIZE = new InjectionToken<number>('cache-size');
export const API_ENDPOINTS = new InjectionToken<Record<string, string>>('api-endpoints');

// Usage with providers
bootstrapApplication(AppComponent, {
  providers: [
    { provide: CACHE_SIZE, useValue: 100 },
    {
      provide: API_ENDPOINTS,
      useValue: {
        users: '/api/users',
        products: '/api/products'
      }
    }
  ]
});

// 2. Multi providers
export const PLUGIN = new InjectionToken<any[]>('application-plugins', {
  factory: () => []
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: PLUGIN, useValue: AuthPlugin, multi: true },
    { provide: PLUGIN, useValue: LoggingPlugin, multi: true },
    { provide: PLUGIN, useValue: AnalyticsPlugin, multi: true }
  ]
});

// Usage
const plugins = inject(PLUGIN); // Returns an array of all provided values

// 3. Running code in injection context
export function initializeApp(injector: Injector) {
  return () => {
    // Create a context where inject() function works
    return runInInjectionContext(injector, () => {
      const http = inject(HttpClient);
      const config = inject(CONFIG_TOKEN);

      // Initialize the app with dependencies
      return http.get(\`\${config.apiUrl}/init\`).toPromise();
    });
  };
}`;

  code_5 = `// Dependency resolution and provider overrides in Angular 19
import { Component, NgModule, Optional, Self, SkipSelf, Host } from '@angular/core';

// 1. Resolution modifiers
@Component({
  selector: 'app-child',
  template: '<div>Child Component</div>',
  providers: [{ provide: LoggerService, useClass: DetailedLoggerService }]
})
export class ChildComponent {
  constructor(
    // Only look for the service in this component's injector
    @Self() private selfLogger: LoggerService,

    // Only look for the service in parent injectors, skip this component
    @SkipSelf() private parentLogger: LoggerService,

    // Look for the service in this component and its hosts
    @Host() private hostLogger: LoggerService,

    // Service is optional, won't throw error if not found
    @Optional() private optionalService?: SpecialService
  ) {
    // Use the injected services
  }
}

// 2. Provider overrides for testing
import { TestBed } from '@angular/core/testing';

describe('ServiceTests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        // Override the AuthService with a mock
        { provide: AuthService, useClass: MockAuthService },

        // Override an InjectionToken
        { provide: API_URL, useValue: 'http://test-api.example.com' }
      ]
    });
  });

  it('should use the mock service', () => {
    const userService = TestBed.inject(UserService);
    const authService = TestBed.inject(AuthService);

    // authService will be the MockAuthService instance
    expect(authService instanceof MockAuthService).toBe(true);
  });
});`;

  code_6 = `// Angular 19 signal-based injector features
import { Component, inject, signal, effect, computed, Injector, createEnvironmentInjector } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  template: \`
    <div>Current count: {{ count() }}</div>
    <div>Doubled: {{ doubled() }}</div>
  \`
})
export class SignalExampleComponent {
  // Inject the required services
  private dataService = inject(DataService);

  // Component state using signals
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  constructor() {
    // Use injected service with signals
    this.dataService.getData().subscribe(value => {
      this.count.set(value);
    });

    // Effects can use injected dependencies
    effect(() => {
      // This will run whenever count changes
      console.log(\`Count changed to \${this.count()}\`);

      // Use injected service inside the effect
      this.dataService.logEvent(\`count-changed-\${this.count()}\`);
    });
  }

  // Create a child environment injector at runtime
  createChildInjector(parentInjector: Injector) {
    return createEnvironmentInjector([
      { provide: CONFIG, useValue: { featureEnabled: true } }
    ], parentInjector);
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Initialize code snippets if needed
  }
}
