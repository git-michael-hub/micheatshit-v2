import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent extends UnsubscribeService {

  selectedTab = 1;

  @ViewChild('schematicoCodeEl') schematicoCodeEl?: ElementRef;
  @ViewChild('customCollectionCodeEl') customCollectionCodeEl?: ElementRef;
  @ViewChild('workspaceCodeEl') workspaceCodeEl?: ElementRef;
  @ViewChild('v19EnhancementsCodeEl') v19EnhancementsCodeEl?: ElementRef;

  // Code examples
  schematicoCode = `// Using Angular's built-in Schematic Collection
ng generate @schematics/angular:component my-component
ng generate @schematics/angular:service my-service
ng generate @schematics/angular:directive my-directive
ng generate @schematics/angular:pipe my-pipe
ng generate @schematics/angular:class my-class
ng generate @schematics/angular:interface my-interface
ng generate @schematics/angular:enum my-enum`;

  customCollectionCode = `// Creating a custom schematics collection
{
  "$schema": "../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
    "my-component": {
      "description": "Generate a component with custom template",
      "factory": "./my-component/index#myComponent",
      "schema": "./my-component/schema.json"
    },
    "feature-module": {
      "description": "Generate a feature module with routing",
      "factory": "./feature-module/index#featureModule",
      "schema": "./feature-module/schema.json"
    }
  }
}`;

  workspaceCode = `// Angular workspace collection configuration in angular.json
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
          "changeDetection": "OnPush",
          "skipTests": true
        },
        "@schematics/angular:application": {
          "strict": true
        },
        "my-custom-collection:feature-module": {
          "routing": true,
          "lazy": true
        }
      },
      // ... other configuration
    }
  }
}`;

  v19EnhancementsCode = `// Angular 19 enhanced collection usage with parameter destructuring
// In your custom schematic rule
export function myCustomSchematic(options: MySchematicOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // Angular 19 adds enhanced typed options
    const { name, path, module, flat, skipImport } = options;

    // Typesafe configurations
    if (module && !skipImport) {
      // Add import to module
    }

    // Enhanced template usage
    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...options,
        ...strings,
        name: strings.dasherize(name),
        // Angular 19 supports inline function interpolation
        className: () => strings.classify(name),
        // New in Angular 19: path normalization helpers
        normalizedPath: getNormalizedPath(path, name)
      }),
      // Improved destination path handling in Angular 19
      move(determineTargetPath(options))
    ]);

    return mergeWith(templateSource)(tree, context);
  };
}

// Using the schematic with new Angular 19 CLI enhancements
ng generate my-custom-collection:feature --name=dashboard --path=modules --dry-run`;

  ngOnInit() {
    // Any initialization code if needed
  }
}
