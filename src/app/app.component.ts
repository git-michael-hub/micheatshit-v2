import { ChangeDetectionStrategy, Component } from '@angular/core';
import { angular } from './feature/angular/data-access/values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'tailwind';


}
