import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-architect',
  templateUrl: './architect.component.html',
  styleUrls: ['./architect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArchitectComponent {
  selectedTab = 1;

  @ViewChild('code1') code1!: ElementRef;
  @ViewChild('code2') code2!: ElementRef;

  customBuilderCode = `// builders.json
{
  "$schema": "../node_modules/@angular-devkit/architect/src/builders-schema.json",
  "builders": {
    "custom-build": {
      "implementation": "./builders/custom-build/index.js",
      "schema": "./builders/custom-build/schema.json",
      "description": "Custom build process"
    }
  }
}`;

  architectConfigCode = `// angular.json example
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "projects": {
    "my-app": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/my-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                }
              ],
              "outputHashing": "all"
            }
          }
        }
      }
    }
  }
}`;
}
