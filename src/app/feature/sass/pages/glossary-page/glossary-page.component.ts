import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BoxWidgetDirective } from 'src/app/utils/directives/box-widget.directive';
import { StateService } from '../../data-access/state.service';

@Component({
  selector: 'app-sass-glossary-page',
  templateUrl: './glossary-page.component.html',
  styleUrls: ['./glossary-page.component.scss']
})
export class SassGlossaryPageComponent {
  // @ViewChild('appBoxWidgetRef', { static: false }) appBoxWidgetRef!: BoxWidgetDirective;

  appBoxWidgetIsClosed!: number;
  bottomPills$!: Observable<{name: string}[]>;

  constructor(
    private stateService: StateService
  ) {
    this.bottomPills$ = this.stateService.getBottomPills()
  }

  closeBox(id: number) {

    this.appBoxWidgetIsClosed = id;
    console.log('close')
  }
}
