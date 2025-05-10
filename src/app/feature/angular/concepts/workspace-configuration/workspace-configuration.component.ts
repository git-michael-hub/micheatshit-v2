import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workspace-configuration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workspace-configuration.component.html',
  styleUrls: ['./workspace-configuration.component.scss']
})
export class WorkspaceConfigurationComponent {
  selectedTab = 1;

  // Code examples for highlighting
  code_16 = `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "my-app": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
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
            "styles": ["src/styles.scss"],
            "scripts": []
          }
        }
      }
    }
  }
}`;

  code_17 = `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "analytics": false,
    "packageManager": "npm",
    "cache": {
      "enabled": true,
      "path": ".angular/cache",
      "environment": "all"
    },
    "schematicCollections": [
      "@angular/pwa"
    ]
  }
}`;

  code_18 = `"schematics": {
  "@schematics/angular:component": {
    "style": "scss",
    "skipTests": false,
    "changeDetection": "OnPush",
    "standalone": true
  },
  "@schematics/angular:directive": {
    "standalone": true
  },
  "@schematics/angular:pipe": {
    "standalone": true
  }
}`;

  code_20 = `ng config projects.my-app.architect.build.options.optimization true`;

  code_21 = `ng config cli.cache.enabled true`;
}
