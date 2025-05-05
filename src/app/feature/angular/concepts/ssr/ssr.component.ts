import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-ssr',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './ssr.component.html',
  styleUrls: ['./ssr.component.scss']
})
export class SsrComponent extends UnsubscribeService {
  selectedTab = 1;

  // Template references for the tabs
  @ViewChild('notesRef') notesRef!: TemplateRef<any>;
  @ViewChild('bestRef') bestRef!: TemplateRef<any>;
  @ViewChild('prosConsRef') prosConsRef!: TemplateRef<any>;
  @ViewChild('topicsRef') topicsRef!: TemplateRef<any>;

  // Code examples for server-side rendering
  ssrSetupCode: string = `// app.server.module.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }`;

  angularJsonCode: string = `{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/my-app/browser",
            "index": "src/index.html",
            "main": "src/main.ts",
            "browser": "src/main.ts"
          }
        },
        "server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist/my-app/server",
            "main": "src/main.server.ts"
          }
        },
        "serve-ssr": {
          "builder": "@nguniversal/builders:ssr-dev-server",
          "options": {
            "browserTarget": "my-app:build",
            "serverTarget": "my-app:server"
          }
        },
        "prerender": {
          "builder": "@nguniversal/builders:prerender",
          "options": {
            "browserTarget": "my-app:build:production",
            "serverTarget": "my-app:server:production",
            "routes": [
              "/",
              "/about",
              "/contact"
            ]
          }
        }
      }
    }
  }
}`;

  v19SetupCode: string = `// main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

// app.config.server.ts
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);`;

  partialHydrationCode: string = `// user-profile.component.ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: \`
    <div>
      <h1>{{ name() }}</h1>
      <p>{{ bio() }}</p>
      <!-- This component won't be interactive on the client -->
    </div>
  \`,
  hydration: { mode: 'none' } // Options: 'full' (default), 'lazy', 'none'
})
export class UserProfileComponent {
  name = input<string>('User Name');
  bio = input<string>('User bio information');
}

// interactive-component.ts
@Component({
  selector: 'app-interactive-component',
  standalone: true,
  template: \`
    <button (click)="increment()">Count: {{ count() }}</button>
  \`,
  hydration: { mode: 'full' } // This component gets fully hydrated immediately
})
export class InteractiveComponent {
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }
}

// lazy-hydrated.component.ts
@Component({
  selector: 'app-lazy-component',
  standalone: true,
  template: \`<div>This hydrates when visible</div>\`,
  hydration: { mode: 'lazy' } // Hydrates when component becomes visible
})
export class LazyHydratedComponent { }`;

  isBrowserCode: string = `// Using DI tokens
import { PLATFORM_ID, Inject, Component } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-platform-aware',
  template: '<div>Platform Aware Component</div>'
})
export class PlatformAwareComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Browser-only code
      console.log('Running in browser');
      // Can safely access window, document, localStorage
      window.addEventListener('resize', this.onResize);
    }

    if (isPlatformServer(this.platformId)) {
      // Server-only code
      console.log('Running on server');
      // Avoid browser APIs, use only Node/server-compatible code
    }
  }

  onResize() {
    // Handle resize event (browser-only)
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Code examples are defined inline in the component
  }
}
