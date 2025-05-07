import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../data-access/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossaryComponent implements OnInit {
  components = [
    {
      "name": "ahead-of-time (AOT) compilation",
      "file_location": "components/aot",
      "url": "aot",
      "hashtags": [
        'performance', 'v19'
      ]
    },
    {
      "name": "afterNextRender",
      "file_location": "components/after-next-render",
      "url": "after-next-render",
      "hashtags": [
        'lifecycle', 'v19'
      ]
    },
    {
      "name": "afterRender",
      "file_location": "components/after-render",
      "url": "after-render",
      "hashtags": [
        'lifecycle', 'v19'
      ]
    },
    {
      "name": "Angular DevTools",
      "file_location": "components/angular-devtools",
      "url": "angular-devtools",
      "hashtags": [
        'debugging', 'v19'
      ]
    },
    {
      "name": "Angular element",
      "file_location": "components/angular-element",
      "url": "angular-element",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "annotation",
      "file_location": "components/annotation",
      "url": "annotation",
      "hashtags": [
        'v19'
      ]
    },
    {
      "name": "app-shell",
      "file_location": "components/app-shell",
      "url": "app-shell",
      "hashtags": [
        'v19', 'performance', 'ssr'
      ]
    },
    {
      "name": "Architect",
      "file_location": "components/architect",
      "url": "architect",
      "hashtags": [
        'v19', 'cli', 'build'
      ]
    },
    {
      "name": "attribute directive",
      "file_location": "components/attribute-directive",
      "url": "attribute-directive",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "binding",
      "file_location": "components/binding",
      "url": "binding",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "bootstrap",
      "file_location": "components/bootstrap",
      "url": "bootstrap",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "built-in control flow",
      "file_location": "components/control-flow",
      "url": "control-flow",
      "hashtags": [
        'v19'
      ]
    },
    {
      "name": "builder",
      "file_location": "components/builder",
      "url": "builder",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "case types",
      "file_location": "components/case-types",
      "url": "case-types",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "change detection",
      "file_location": "components/change-detection",
      "url": "change-detection",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "class decorator",
      "file_location": "components/class-decorator",
      "url": "class-decorator",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "class field decorator",
      "file_location": "components/class-field-decorator",
      "url": "class-field-decorator",
      "hashtags": [
        'v19'
      ]
    },
    {
      "name": "collection",
      "file_location": "components/collection",
      "url": "collection",
      "hashtags": [
        'v19', 'cli', 'schematics'
      ]
    },
    {
      "name": "command-line interface (CLI)",
      "file_location": "components/cli",
      "url": "cli",
      "hashtags": [
        'v19', 'tools', 'productivity'
      ]
    },
    {
      "name": "component",
      "file_location": "components/component",
      "url": "component",
      "hashtags": [
        'v19', 'fundamentals', 'architecture'
      ]
    },
    {
      "name": "configuration",
      "file_location": "components/configuration",
      "url": "configuration",
      "hashtags": [
        'v19', 'workspace', 'build'
      ]
    },
    {
      "name": "content projection",
      "file_location": "components/content-projection",
      "url": "content-projection",
      "hashtags": [
        'v19', 'component', 'template'
      ]
    },
    {
      "name": "custom element",
      "file_location": "components/custom-element",
      "url": "custom-element",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "data binding",
      "file_location": "components/data-binding",
      "url": "data-binding",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "declarable",
      "file_location": "components/declarable",
      "url": "declarable",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "decorator | decoration",
      "file_location": "components/decorator",
      "url": "decorator",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "deferrable views",
      "file_location": "components/deferrable-views",
      "url": "deferrable-views",
      "hashtags": [
        'v19', 'performance', 'lazy-loading'
      ]
    },
    {
      "name": "dependency injection (DI)",
      "file_location": "components/di",
      "url": "di",
      "hashtags": [
        'v19', 'core', 'services'
      ]
    },
    {
      "name": "DI token",
      "file_location": "components/di-token",
      "url": "di-token",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "directive",
      "file_location": "components/directive",
      "url": "directive",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "domain-specific language (DSL)",
      "file_location": "components/dsl",
      "url": "dsl",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "dynamic component loading",
      "file_location": "components/dynamic-component-loading",
      "url": "dynamic-component-loading",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "eager loading",
      "file_location": "components/eager-loading",
      "url": "eager-loading",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "ECMAScript",
      "file_location": "components/ecmascript",
      "url": "ecmascript",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "element",
      "file_location": "components/element",
      "url": "element",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "entry point",
      "file_location": "components/entry-point",
      "url": "entry-point",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "form control",
      "file_location": "components/form-control",
      "url": "form-control",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "form model",
      "file_location": "components/form-model",
      "url": "form-model",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "form validation",
      "file_location": "components/form-validation",
      "url": "form-validation",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "hydration",
      "file_location": "components/hydration",
      "url": "hydration",
      "hashtags": [
        'v19', 'performance', 'ssr'
      ]
    },
    {
      "name": "immutability",
      "file_location": "components/immutability",
      "url": "immutability",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "injectable",
      "file_location": "components/injectable",
      "url": "injectable",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "injector",
      "file_location": "components/injector",
      "url": "injector",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "input",
      "file_location": "components/input",
      "url": "input",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "input transform",
      "file_location": "components/input-transform",
      "url": "input-transform",
      "hashtags": [
        'v19'
      ]
    },
    {
      "name": "interpolation",
      "file_location": "components/interpolation",
      "url": "interpolation",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "Ivy",
      "file_location": "components/ivy",
      "url": "ivy",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "JavaScript",
      "file_location": "components/javascript",
      "url": "javascript",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "just-in-time (JIT) compilation",
      "file_location": "components/jit",
      "url": "jit",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "lazy loading",
      "file_location": "components/lazy-loading",
      "url": "lazy-loading",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "library",
      "file_location": "components/library",
      "url": "library",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "lifecycle hook",
      "file_location": "components/hooks",
      "url": "hooks",
      "hashtags": [
        ''
      ]
    },
    // {
    //   "name": "module",
    //   "file_location": "components/module",
    //   "url": "module",
    //   "hashtags": [
    //     ''
    //   ]
    // },
    {
      "name": "ngcc",
      "file_location": "components/ngcc",
      "url": "ngcc",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "NgModule",
      "file_location": "components/module",
      "url": "ngmodule",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "npm package",
      "file_location": "components/npm-package",
      "url": "npm-package",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "ngc",
      "file_location": "components/ngc",
      "url": "ngc",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "observable",
      "file_location": "components/observable",
      "url": "observable",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "observer",
      "file_location": "components/observer",
      "url": "observer",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "output",
      "file_location": "components/output",
      "url": "output",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "partial hydration",
      "file_location": "components/partial-hydration",
      "url": "partial-hydration",
      "hashtags": [
        'v19', 'performance', 'ssr'
      ]
    },
    {
      "name": "pipe",
      "file_location": "components/pipe",
      "url": "pipe",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "platform",
      "file_location": "components/platform",
      "url": "platform",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "polyfill",
      "file_location": "components/polyfill",
      "url": "polyfill",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "project",
      "file_location": "components/project",
      "url": "project",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "provider",
      "file_location": "components/provider",
      "url": "provider",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "reactive form",
      "file_location": "components/reactive-form",
      "url": "reactive-form",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "resolver",
      "file_location": "components/resolver",
      "url": "resolver",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "route guard",
      "file_location": "components/route-guard",
      "url": "route-guard",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "router",
      "file_location": "components/router",
      "url": "router",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "router outlet",
      "file_location": "components/router-outlet",
      "url": "router-outlet",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "routing component",
      "file_location": "components/routing-component",
      "url": "routing-component",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "rule",
      "file_location": "components/rule",
      "url": "rule",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "schematic",
      "file_location": "components/schematic",
      "url": "schematic",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "Schematics CLI",
      "file_location": "components/schematics-cli",
      "url": "schematics-cli",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "scoped package",
      "file_location": "components/scoped-package",
      "url": "scoped-package",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "server-side rendering",
      "file_location": "components/ssr",
      "url": "ssr",
      "hashtags": [
        'v19', 'performance', 'seo'
      ]
    },
    {
      "name": "service",
      "file_location": "components/service",
      "url": "service",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "signal-based components",
      "file_location": "components/signal-components",
      "url": "signal-components",
      "hashtags": [
        'v19', 'performance', 'reactive'
      ]
    },
    {
      "name": "signals",
      "file_location": "components/signals",
      "url": "signals",
      "hashtags": [
        'v19', 'reactivity', 'performance'
      ]
    },
    {
      "name": "standalone",
      "file_location": "components/standalone",
      "url": "standalone",
      "hashtags": [
        'v19', 'architecture', 'performance'
      ]
    },
    {
      "name": "structural directive",
      "file_location": "components/structural-directive",
      "url": "structural-directive",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "styleUrl",
      "file_location": "components/style-url",
      "url": "style-url",
      "hashtags": [
        'v19'
      ]
    },
    {
      "name": "subscriber",
      "file_location": "components/subscriber",
      "url": "subscriber",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "target",
      "file_location": "components/target",
      "url": "target",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "template",
      "file_location": "components/template",
      "url": "template",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "template-driven forms",
      "file_location": "components/template-form",
      "url": "template-form",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "template expression",
      "file_location": "components/template-expression",
      "url": "template-expression",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "template reference variable",
      "file_location": "components/template-reference-variable",
      "url": "template-reference-variable",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "template input variable",
      "file_location": "components/template-input-variable",
      "url": "template-input-variable",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "token",
      "file_location": "components/token",
      "url": "token",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "transpile",
      "file_location": "components/transpile",
      "url": "transpile",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "tree",
      "file_location": "components/tree",
      "url": "tree",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "TypeScript",
      "file_location": "components/typescript",
      "url": "typescript",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "TypeScript configuration file",
      "file_location": "components/typescript-configuration",
      "url": "typescript-configuration",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "unidirectional data flow",
      "file_location": "components/unidirectional-data-flow",
      "url": "unidirectional-data-flow",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "Universal",
      "file_location": "components/universal",
      "url": "universal",
      "hashtags": [
        'v19', 'ssr', 'performance'
      ]
    },
    {
      "name": "view",
      "file_location": "components/view",
      "url": "view",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "View Engine",
      "file_location": "components/view-engine",
      "url": "view-engine",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "view hierarchy",
      "file_location": "components/view-hierarchy",
      "url": "view-hierarchy",
      "hashtags": [
        'v19', 'performance', 'rendering'
      ]
    },
    {
      "name": "view transitions",
      "file_location": "components/view-transitions",
      "url": "view-transitions",
      "hashtags": [
        'v19', 'animation'
      ]
    },
    {
      "name": "web component",
      "file_location": "components/web-component",
      "url": "web-component",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "workspace",
      "file_location": "components/workspace",
      "url": "workspace",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "workspace configuration",
      "file_location": "components/workspace-configuration",
      "url": "workspace-configuration",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "zone",
      "file_location": "components/zone",
      "url": "zone",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "zoneless applications",
      "file_location": "components/zoneless-applications",
      "url": "zoneless-applications",
      "hashtags": [
        'v19', 'performance', 'signals'
      ]
    },
  ];

  // bottomPills$!: Observable<{}[]>;

  constructor(
    private stateService: StateService,
    private router: Router
  ) {
    // this.bottomPills$ = this.stateService.getBottomPills()
  }

  fn(s: {name: string}) {
    console.log(s);
    this.stateService.addBottomPills(s)
  }

  ngOnInit() {
    // Update URLs based on routes
    this.components.forEach(item => {
      if (item.name === 'built-in control flow') {
        item.url = '/angular/control-flow';
      }
      // ... existing code for other items ...
    });
  }
}
