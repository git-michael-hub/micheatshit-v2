import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapComponent {

}
