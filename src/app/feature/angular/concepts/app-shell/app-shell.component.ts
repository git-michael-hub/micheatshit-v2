import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent extends UnsubscribeService {
  selectedTab = 1;

  @ViewChild('code1') code1?: ElementRef;
  @ViewChild('code2') code2?: ElementRef;
  @ViewChild('code3') code3?: ElementRef;
  @ViewChild('code4') code4?: ElementRef;
  @ViewChild('code5') code5?: ElementRef;

  // Configuration for app-shell in angular.json
  configCode = `{
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true
            }
          }
        },
        "app-shell": {
          "builder": "@angular-devkit/build-angular:app-shell",
          "options": {
            "browserTarget": "my-app:build",
            "serverTarget": "my-app:server",
            "route": "shell"
          },
          "configurations": {
            "production": {
              "browserTarget": "my-app:build:production",
              "serverTarget": "my-app:server:production"
            }
          }
        }
      }
    }
  }
}`;

  // App shell module setup
  appModuleCode = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot([
      { path: 'shell', component: ShellComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }`;

  // Modern App Shell with Standalone Components
  standaloneCode = `// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withNoDomReuse } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(
      withNoDomReuse()
    )
  ]
};`;

  // Shell Component
  shellComponentCode = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="app-shell">
      <header>
        <h1>My Application</h1>
        <div class="nav-placeholder"></div>
      </header>
      <main>
        <div class="content-placeholder">
          <div class="loading-spinner"></div>
        </div>
      </main>
      <footer>© 2025 My App</footer>
    </div>
  \`,
  styles: [\`
    .app-shell {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .nav-placeholder, .content-placeholder {
      background: #f0f0f0;
      border-radius: 4px;
      margin: 10px 0;
      min-height: 50px;
    }
    .content-placeholder {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 300px;
    }
    .loading-spinner {
      border: 3px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top: 3px solid #3498db;
      width: 30px;
      height: 30px;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  \`]
})
export class ShellComponent { }`;

  // Modern Command to generate App Shell
  shellCommandCode = `# Generate a new Angular 19 app with SSR and App Shell
ng new my-app --ssr

# Or add it to an existing app
ng add @angular/ssr --app-shell

# Build with App Shell
ng build --configuration production`;

  constructor() {
    super();
  }
}
