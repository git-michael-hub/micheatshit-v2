import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-di',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DiComponent extends UnsubscribeService implements OnInit {
  @ViewChild('notesTemplate') notesTemplate!: TemplateRef<any>;
  @ViewChild('bestPracticesTemplate') bestPracticesTemplate!: TemplateRef<any>;
  @ViewChild('prosConsTemplate') prosConsTemplate!: TemplateRef<any>;
  @ViewChild('relatedTopicsTemplate') relatedTopicsTemplate!: TemplateRef<any>;

  activeTab = 'notes';

  basicServiceCode = `@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string): void {
    console.log(\`LOG: \${message}\`);
  }
}`;

  componentInjectionCode = `@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  providers: [CounterService] // Provided at component level
})
export class ExampleComponent {
  constructor(private counterService: CounterService) { }
}`;

  provideInRootCode = `@Injectable({
  providedIn: 'root' // Available application-wide as singleton
})
export class UserService {
  // Service implementation
}`;

  hierarchicalDICode = `@Component({
  selector: 'app-parent',
  template: \`
    <h2>Parent using: {{dataService.getValue()}}</h2>
    <app-child></app-child>
  \`,
  providers: [{ provide: DataService, useClass: ParentDataService }]
})
export class ParentComponent {
  constructor(public dataService: DataService) { }
}`;

  tokenInjectionCode = `// Define an injection token
export const API_URL = new InjectionToken<string>('api.url');

// Provide a value for the token
@NgModule({
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' }
  ]
})

// Inject the token value
constructor(@Inject(API_URL) private apiUrl: string) { }`;

  factoryProviderCode = `// Factory function
export function configFactory(config: ConfigService) {
  return () => config.loadConfig();
}

@NgModule({
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ]
})`;

  standaloneInjectionCode = `// In a standalone component
@Component({
  standalone: true,
  providers: [
    provideAnimations(),
    ServiceA,
    { provide: ServiceB, useClass: MockServiceB }
  ]
})

// In main.ts for app-wide providers
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: ErrorHandler, useClass: CustomErrorHandler }
  ]
});`;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
