import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../data-access/state.service';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlossaryComponent {
  components = [
    {
      "name": "ahead-of-time (AOT) compilation",
      "file_location": "components/aot",
      "url": "aot",
      "hashtags": [
        ''
      ]
    },
    {
      "name": "Angular element"
    },
    {
      "name": "annotation"
    },
    {
      "name": "app-shell"
    },
    {
      "name": "Architect"
    },
    {
      "name": "attribute directive",
      "url": "attribute-directive"
    },
    {
      "name": "binding"
    },
    {
      "name": "bootstrap"
    },
    {
      "name": "builder"
    },
    {
      "name": "case types",
      "url": "case-types"
    },
    {
      "name": "change detection",
      "url": "change-detection"
    },
    {
      "name": "class decorator",
    },
    {
      "name": "class field decorator"
    },
    {
      "name": "collection"
    },
    {
      "name": "command-line interface (CLI)"
    },
    {
      "name": "component"
    },
    {
      "name": "configuration"
    },
    {
      "name": "content projection"
    },
    {
      "name": "custom element"
    },
    {
      "name": "data binding"
    },
    {
      "name": "declarable"
    },
    {
      "name": "decorator | decoration"
    },
    {
      "name": "dependency injection (DI)",
      "url": "di"
    },
    {
      "name": "DI token"
    },
    {
      "name": "directive",
      "url": "directive"
    },
    {
      "name": "domain-specific language (DSL)"
    },
    {
      "name": "dynamic component loading",
      "url": "dynamic-component-loading"
    },
    {
      "name": "eager loading"
    },
    {
      "name": "ECMAScript"
    },
    {
      "name": "element"
    },
    {
      "name": "entry point"
    },
    {
      "name": "form control",
      "url": "form-control"
    },
    {
      "name": "form model",
      "url": "form-model"
    },
    {
      "name": "form validation",
      "url": "form-validation"
    },
    {
      "name": "immutability"
    },
    {
      "name": "injectable"
    },
    {
      "name": "injector"
    },
    {
      "name": "input"
    },
    {
      "name": "interpolation"
    },
    {
      "name": "Ivy"
    },
    {
      "name": "JavaScript"
    },
    {
      "name": "just-in-time (JIT) compilation"
    },
    {
      "name": "lazy loading",
      "url": "lazy-loading"
    },
    {
      "name": "library"
    },
    {
      "name": "lifecycle hook",
      "url": "hooks"
    },
    {
      "name": "module"
    },
    {
      "name": "ngcc"
    },
    {
      "name": "NgModule"
    },
    {
      "name": "npm package"
    },
    {
      "name": "ngc"
    },
    {
      "name": "observable",
      "url": "observable"
    },
    {
      "name": "observer"
    },
    {
      "name": "output"
    },
    {
      "name": "pipe",
      "url": "pipe"
    },
    {
      "name": "platform"
    },
    {
      "name": "polyfill"
    },
    {
      "name": "project"
    },
    {
      "name": "provider"
    },
    {
      "name": "reactive form",
      "url": "reactive-form"
    },
    {
      "name": "resolver",
      "url": "resolver"
    },
    {
      "name": "route guard",
      "url": "route-guard"
    },
    {
      "name": "router",
      "url": "router"
    },
    {
      "name": "router outlet",
      "url": "router-outlet"
    },
    {
      "name": "routing component",
      "url": "routing-component"
    },
    {
      "name": "rule"
    },
    {
      "name": "schematic"
    },
    {
      "name": "Schematics CLI"
    },
    {
      "name": "scoped package"
    },
    {
      "name": "server-side rendering"
    },
    {
      "name": "service"
    },
    {
      "name": "standalone"
    },
    {
      "name": "structural directive",
      "url": "structural-directive"
    },
    {
      "name": "subscriber",
      "url": "subscriber"
    },
    {
      "name": "target"
    },
    {
      "name": "template",
      "url": "template"
    },
    {
      "name": "template-driven forms",
      "url": "template-form"
    },
    {
      "name": "template expression"
    },
    {
      "name": "template reference variable"
    },
    {
      "name": "template input variable"
    },
    {
      "name": "token"
    },
    {
      "name": "transpile"
    },
    {
      "name": "tree"
    },
    {
      "name": "TypeScript"
    },
    {
      "name": "TypeScript configuration file"
    },
    {
      "name": "unidirectional data flow"
    },
    {
      "name": "Universal"
    },
    {
      "name": "view"
    },
    {
      "name": "View Engine"
    },
    {
      "name": "view hierarchy"
    },
    {
      "name": "web component"
    },
    {
      "name": "workspace"
    },
    {
      "name": "workspace configuration"
    },
    {
      "name": "zone"
    },
  ];

  // bottomPills$!: Observable<{}[]>;

  constructor(
    private stateService: StateService
  ) {
    // this.bottomPills$ = this.stateService.getBottomPills()
  }

  fn(s: {name: string}) {
    console.log(s);
    this.stateService.addBottomPills(s)
  }


}
