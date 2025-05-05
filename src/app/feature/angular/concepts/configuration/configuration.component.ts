import { Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
// import { UnsubscribeService } from '../../../../shared/services/unsubscribe.service';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  // providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigurationComponent implements OnInit {
  selectedTab = 1;

  @ViewChild('angularJsonCodeEl') angularJsonCodeEl!: ElementRef;
  @ViewChild('environmentConfigCodeEl') environmentConfigCodeEl!: ElementRef;
  @ViewChild('workspaceConfigCodeEl') workspaceConfigCodeEl!: ElementRef;
  @ViewChild('modernBundlingCodeEl') modernBundlingCodeEl!: ElementRef;

  angularJsonCode = `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm",
    "analytics": false,
    "schematicCollections": ["@angular/v19-schematics"]
  },
  "projects": {
    "my-app": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "standalone": true,
          "changeDetection": "OnPush",
          "skipTests": true
        },
        "@schematics/angular:directive": {
          "standalone": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"],
            "scripts": [],
            "optimization": false,
            "budgets": [
              {
                "type": "initial",
                "maximumWarning": "500kb",
                "maximumError": "1mb"
              },
              {
                "type": "anyComponentStyle",
                "maximumWarning": "2kb",
                "maximumError": "4kb"
              }
            ]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.production.ts"
                }
              ],
              "outputHashing": "all",
              "optimization": true,
              "sourceMap": false
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "my-app:build:production"
            },
            "development": {
              "buildTarget": "my-app:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": ["zone.js", "zone.js/testing"],
            "tsConfig": "tsconfig.spec.json",
            "inlineStyleLanguage": "scss",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"],
            "scripts": []
          }
        },
        "server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist/my-app/server",
            "main": "server.ts",
            "tsConfig": "tsconfig.server.json",
            "optimization": false,
            "sourceMap": true
          },
          "configurations": {
            "production": {
              "outputHashing": "media",
              "optimization": true,
              "sourceMap": false
            },
            "development": {
              "optimization": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        }
      }
    }
  }
}`;

  environmentConfigCode = `// environment.ts - base environment file
export const environment = {
  production: false,
  apiUrl: 'https://api.example.com/dev',
  features: {
    enableExperimentalFeatures: true,
    useSignals: true,
    enableDeferredComponents: true
  },
  auth: {
    clientId: 'your-dev-client-id',
    authority: 'https://login.example.com/dev'
  },
  logging: {
    level: 'debug',
    enableConsoleLogging: true
  }
};

// environment.production.ts - production environment
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com/prod',
  features: {
    enableExperimentalFeatures: false,
    useSignals: true,
    enableDeferredComponents: true
  },
  auth: {
    clientId: 'your-prod-client-id',
    authority: 'https://login.example.com/prod'
  },
  logging: {
    level: 'error',
    enableConsoleLogging: false
  }
};

// Using environment values in a service
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.production
    ? environment.apiUrl
    : environment.apiUrl + '/v1';

  constructor() {
    if (environment.features.enableExperimentalFeatures) {
      console.log('Experimental features enabled');
    }
  }

  // Service methods...
}`;

  workspaceConfigCode = `// tsconfig.json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom"
    ],
    "paths": {
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"],
      "@env/*": ["src/environments/*"]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// package.json (partial)
{
  "name": "my-angular19-app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "build:prod": "ng build --configuration production",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "eslint 'src/**/*.{ts,html}'",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^19.0.0",
    "@angular/common": "^19.0.0",
    "@angular/compiler": "^19.0.0",
    "@angular/core": "^19.0.0",
    "@angular/forms": "^19.0.0",
    "@angular/platform-browser": "^19.0.0",
    "@angular/platform-browser-dynamic": "^19.0.0",
    "@angular/router": "^19.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.0.0",
    "@angular/cli": "^19.0.0",
    "@angular/compiler-cli": "^19.0.0",
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.2.2"
  }
}`;

  modernBundlingCode = `// vite.config.ts - Modern bundling configuration for an Angular app
import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { vavite } from 'vavite';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const isProduction = mode === 'production';

  return {
    publicDir: 'src/assets',
    build: {
      target: 'es2022',
      outDir: 'dist',
      rollupOptions: {
        // Externalize Angular deps for better build times in dev
        external: isProduction ? [] : [
          '@angular/core',
          '@angular/common',
          '@angular/router'
        ]
      }
    },
    resolve: {
      mainFields: ['module']
    },
    plugins: [
      analog({
        ssrBuildDir: './dist/ssr',
        prerender: {
          routes: ['/'],
          sitemap: { host: 'https://example.com' },
        },
        nitro: {
          preset: 'vercel',
          // Customize server-side rendering options
          serverRoutes: ['/api/**'],
          externals: { inline: ['zone.js/node'] }
        },
        vite: {
          inlineStylesExtension: 'scss'
        }
      }),
      vavite({
        serverEntry: '/server/main.ts',
        serveClientAssetsInDev: true
      })
    ],
    optimizeDeps: {
      include: ['@angular/common', '@angular/core'],
      exclude: ['@analogjs/router', '@analogjs/platform']
    },
    ssr: {
      noExternal: [
        '@angular/**',
        '@analogjs/**',
        'rxjs/**',
      ]
    }
  };
});

// Angular specific configuration for enabling partial hydration
// app/config.ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withNoHttpTransferCache } from '@angular/platform-browser';
import { provideFileRouter, withInMemoryScrolling } from '@analogjs/router';
import { withViewTransitions } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withViewTransitions()
    ),
    provideHttpClient(),
    provideClientHydration(withNoHttpTransferCache())
  ]
};`;

  constructor() {}

  ngOnInit(): void {}
}
