import { ChangeDetectionStrategy, Component } from '@angular/core';
import { technologies } from '../../app.value';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  readonly technologies = technologies;

  // items: string[] = Object.keys(this.technologies);
  // items = this.
}
