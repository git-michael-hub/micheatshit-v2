import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-angular-element',
  templateUrl: './angular-element.component.html',
  styleUrls: ['./angular-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularElementComponent extends UnsubscribeService {
  selectedTab = 1;

  code_1 = '';
  code_2 = '';
  code_3 = '';
  code_4 = '';
  code_5 = '';
  code_19 = ''; // Modern code example with the sequential number pattern

  // Best practices code examples
  codeb_1 = '';
  codeb_2 = '';
  codeb_3 = '';

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    this.http.get('assets/codes/angular-element/notes/code_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_1 = data);

    this.http.get('assets/codes/angular-element/notes/code_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_2 = data);

    this.http.get('assets/codes/angular-element/notes/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_3 = data);

    this.http.get('assets/codes/angular-element/notes/code_4.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_4 = data);

    this.http.get('assets/codes/angular-element/notes/code_5.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_5 = data);

    this.http.get('assets/codes/angular-element/notes/code_19.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_19 = data);

    this.http.get('assets/codes/angular-element/best/code_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_1 = data);

    this.http.get('assets/codes/angular-element/best/code_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_2 = data);

    this.http.get('assets/codes/angular-element/best/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_3 = data);
  }
}
