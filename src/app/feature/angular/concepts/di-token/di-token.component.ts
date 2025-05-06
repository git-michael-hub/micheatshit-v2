import { Component } from '@angular/core';

@Component({
  selector: 'app-di-token',
  templateUrl: './di-token.component.html',
  styleUrls: ['./di-token.component.scss']
})
export class DiTokenComponent {
  selectedTab = 1;

  // Code examples for syntax highlighting
  code_1 = `@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Service implementation
}

// Injecting using the class token
const userService = inject(UserService);`;

  code_2 = `import { InjectionToken } from '@angular/core';

// Define a token with improved type safety in Angular 19
export const API_URL = new InjectionToken<string>(
  'API URL token',
  { providedIn: 'root', factory: () => 'https://api.example.com' }
);

// Using inject() function with the token
const apiUrl = inject(API_URL);`;

  code_3 = `// String tokens (not recommended in Angular 19)
{
  provide: 'API_URL',
  useValue: 'https://api.example.com'
}

// Inject with string token - lacks type safety
@Inject('API_URL') apiUrl: string`;

  code_4 = `// Type-safe configuration token with interface
interface AppConfig {
  apiUrl: string;
  theme: 'light' | 'dark';
  features: string[];
}

// Angular 19 improves type inference here
export const APP_CONFIG = new InjectionToken<AppConfig>(
  'Application configuration',
  {
    providedIn: 'root',
    factory: () => ({
      apiUrl: 'https://api.example.com',
      theme: 'light',
      features: ['search', 'notifications']
    })
  }
);`;

  code_5 = `import { signal } from '@angular/core';

// Token for a signal-based configuration
export const THEME_CONFIG = new InjectionToken<Signal<string>>(
  'Theme configuration',
  {
    providedIn: 'root',
    factory: () => signal('light')
  }
);

// Component using the signal from token
@Component({
  /* ... */
})
export class ThemeComponent {
  private themeSignal = inject(THEME_CONFIG);

  // Use in template with automatic reactivity
  currentTheme = computed(() => \`theme-\${this.themeSignal()}\`);
}`;

  code_6 = `// Optimized token with providedIn for tree-shaking
export const LOGGER = new InjectionToken<LoggerService>(
  'Logger Service',
  {
    providedIn: 'root',
    factory: () => new ConsoleLoggerService()
  }
);

// Modern inject approach - more efficient in Angular 19
const logger = inject(LOGGER);`;
}
