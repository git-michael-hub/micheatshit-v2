import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-npm-package',
  templateUrl: './npm-package.component.html',
  styleUrls: ['./npm-package.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NpmPackageComponent {
  selectedTab = 1;

  // Code snippets
  code_1 = `npm install my-package --save`;
  code_2 = `{
  "dependencies": {
    "@angular/core": "^19.0.0",
    "@angular/common": "^19.0.0",
    "my-angular-library": "^1.0.0"
  }
}`;
  code_3 = `npm list --depth=0`;

  // Template references
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;
}
