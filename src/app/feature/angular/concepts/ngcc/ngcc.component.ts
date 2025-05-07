import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ngcc',
  templateUrl: './ngcc.component.html',
  styleUrls: ['./ngcc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgccComponent {
  selectedTab = 1;

  // Template references
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;
}
