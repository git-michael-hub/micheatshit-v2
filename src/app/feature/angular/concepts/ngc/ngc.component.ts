import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ngc',
  templateUrl: './ngc.component.html',
  styleUrls: ['./ngc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgcComponent {
  selectedTab = 1;

  // Code snippets
  code_1 = `ng build --aot`;
  code_2 = `{
  "angularCompilerOptions": {
    "enableIvy": true,
    "strictInjectionParameters": true,
    "strictTemplates": true
  }
}`;
  code_3 = `// Component code with AOT-friendly metadata
@Component({
  selector: 'app-example',
  template: '<div>{{ message }}</div>'
})
export class ExampleComponent {
  message = 'Hello Angular NGC';
}`;

  // Template references
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;
}
