import { ChangeDetectionStrategy, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuilderComponent {
  selectedTab = 1;

  @ViewChild('code1') code1?: ElementRef;
  @ViewChild('code2') code2?: ElementRef;
  @ViewChild('code3') code3?: ElementRef;
  @ViewChild('code4') code4?: ElementRef;
  @ViewChild('code5') code5?: ElementRef;

  // Code examples for builders
  customBuilderCode = `// custom-webpack.builder.ts
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import * as webpack from 'webpack';
import * as fs from 'fs';

interface Options extends JsonObject {
  webpackConfig: string;
  outputPath: string;
}

export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>(async (resolve, reject) => {
    // Load custom webpack config
    const webpackConfig = require(options.webpackConfig);

    // Create compiler instance
    const compiler = webpack(webpackConfig);

    // Run webpack
    compiler.run((err, stats) => {
      if (err) {
        context.logger.error('Error during compilation!', err);
        reject({ success: false });
        return;
      }

      context.logger.info(stats?.toString({ colors: true }));
      resolve({ success: true });
    });
  });
});`;

  builderJsonCode = `// builders.json
{
  "$schema": "../../node_modules/@angular-devkit/architect/src/builders-schema.json",
  "builders": {
    "custom-webpack": {
      "implementation": "./custom-webpack.builder",
      "schema": "./schema.json",
      "description": "Custom webpack builder that uses a provided webpack config"
    }
  }
}`;

  schemaJsonCode = `// schema.json
{
  "$schema": "http://json-schema.org/draft-07/schema",
  "title": "Custom Webpack Builder",
  "description": "Custom webpack builder options",
  "type": "object",
  "properties": {
    "webpackConfig": {
      "type": "string",
      "description": "Path to webpack configuration"
    },
    "outputPath": {
      "type": "string",
      "description": "Path to output directory"
    }
  },
  "required": ["webpackConfig", "outputPath"]
}`;

  angularJsonCode = `// angular.json (excerpt)
{
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "outputPath": "dist/my-app",
        "index": "src/index.html",
        "main": "src/main.ts"
        // other options...
      }
    },
    "custom-build": {
      "builder": "./builders:custom-webpack",
      "options": {
        "webpackConfig": "./webpack.custom.js",
        "outputPath": "dist/custom-build"
      }
    }
  }
}`;

  runBuilderCode = `// Usage with Angular CLI
ng run my-project:custom-build

// Programmatic usage in Node.js
const { Architect } = require('@angular-devkit/architect');
const { WorkspaceNodeModulesArchitectHost } = require('@angular-devkit/architect/node');
const { TestingWorkspaceHost } = require('@angular-devkit/core/node/testing');
const { join } = require('path');

async function runBuilder() {
  const workspaceRoot = join(__dirname, '../..');
  const workspaceHost = new TestingWorkspaceHost(workspaceRoot);

  const architectHost = new WorkspaceNodeModulesArchitectHost(workspaceRoot, workspaceRoot);
  const architect = new Architect(architectHost, workspaceHost);

  const run = await architect.scheduleBuilder(
    './builders:custom-webpack',
    {
      webpackConfig: './webpack.custom.js',
      outputPath: 'dist/custom'
    },
    { logger: console }
  );

  const output = await run.output.toPromise();
  console.log('Builder output:', output);
  await run.stop();
}`;
}
