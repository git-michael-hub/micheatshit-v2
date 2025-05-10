import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  selectedTab = 1;

  // Code examples for highlighting
  code_16 = 'ng new my-app';

  code_17 = 'ng generate application second-app';

  code_18 = `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "my-app": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "inlineTemplate": false,
          "inlineStyle": false,
          "style": "scss",
          "skipTests": false
        }
      }
    }
  }
}`;

  code_20 = `ng generate library my-lib --prefix=lib`;

  code_21 = `ng new my-workspace --no-create-application`;
}
