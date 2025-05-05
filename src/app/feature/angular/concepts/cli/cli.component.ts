import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-cli',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CliComponent extends UnsubscribeService {

  selectedTab = 1;

  @ViewChild('basicCommandsCodeEl') basicCommandsCodeEl?: ElementRef;
  @ViewChild('v19CommandsCodeEl') v19CommandsCodeEl?: ElementRef;
  @ViewChild('workspaceConfigCodeEl') workspaceConfigCodeEl?: ElementRef;
  @ViewChild('customBuildersCodeEl') customBuildersCodeEl?: ElementRef;

  // Code examples
  basicCommandsCode = `# Creating a new application
ng new my-app

# Generating components
ng generate component my-component
ng g c my-component --standalone # shorthand with standalone flag

# Generating services
ng generate service my-service
ng g s my-service --skip-tests # shorthand with flag

# Building for production
ng build --configuration production

# Running the development server
ng serve

# Running unit tests
ng test

# Running end-to-end tests
ng e2e

# Linting the project
ng lint`;

  v19CommandsCode = `# Creating a new Angular 19 app with latest features
ng new my-app --standalone --ssr --inline-critical-css

# Generating a signal-based component
ng generate component my-component --standalone --change-detection=OnPush

# Creating a library with the new CLI library generator
ng generate library my-lib --standalone

# Using the new partial hydration options
ng serve --hydration --partial-hydration

# Enhanced ng update with dependency analysis
ng update --analyze-dependencies

# Using the new build performance profiler
ng build --profile

# Creating a new app with the new minimal bundle size option
ng new my-app --minimal

# Analyzing bundle sizes with the enhanced stats command
ng build --stats-json && ng analytics`;

  workspaceConfigCode = `// angular.json configuration for CLI options
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "my-app": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "standalone": true,
          "changeDetection": "OnPush"
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"],
            "scripts": [],
            "optimization": false,
            "sourceMap": true,
            "namedChunks": true,
            "extractLicenses": false,
            "buildOptimizer": false
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
              "outputHashing": "all",
              "optimization": true,
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "buildOptimizer": true
            }
          }
        }
      }
    }
  }
}`;

  customBuildersCode = `// Custom builder implementation for Angular 19
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';

interface Options extends JsonObject {
  command: string;
  args: string[];
}

export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>(async (resolve) => {
    context.logger.info(\`Executing custom command: \${options.command}\`);

    try {
      // Implementation of custom build steps
      const { spawn } = require('child_process');
      const child = spawn(options.command, options.args, { shell: true });

      child.stdout.on('data', (data: Buffer) => {
        context.logger.info(data.toString());
      });

      child.stderr.on('data', (data: Buffer) => {
        context.logger.error(data.toString());
      });

      child.on('close', (code: number) => {
        resolve({ success: code === 0 });
      });
    } catch (error) {
      context.logger.error('Error during command execution: ' + error);
      resolve({ success: false });
    }
  });
});

// Usage in angular.json
/*
"architect": {
  "custom": {
    "builder": "./builders:custom",
    "options": {
      "command": "echo",
      "args": ["Hello from custom builder"]
    }
  }
}
*/`;

  ngOnInit() {
    // Any initialization code if needed
  }
}
