import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent extends UnsubscribeService {

  selectedTab = 1;

  code_1 = '';
  code_2 = '';
  code_3 = '';
  code_4 = '';
  code_5 = '';
  code_6 = '';
  code_7 = '';
  code_8 = '';
  code_9 = '';
  code_10 = '';
  code_11 = '';
  code_12 = '';
  code_13 = '';
  code_14 = '';
  code_15 = '';

  codeb_1 = '';
  codeb_2 = '';
  codeb_3 = '';
  codeb_4 = '';
  codeb_5 = '';
  codeb_6 = '';
  codeb_7 = '';
  codeb_8 = '';
  codeb_9 = '';

  constructor(
    private http: HttpClient
  ) {
    super()
  }

  ngOnInit() {
    this.http.get('assets/codes/change-detection/notes/code_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_1 = data);

    this.http.get('assets/codes/change-detection/notes/code_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_2 = data);

    this.http.get('assets/codes/change-detection/notes/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_3 = data);

    this.http.get('assets/codes/change-detection/notes/code_4.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_4 = data);

    this.http.get('assets/codes/change-detection/notes/code_5.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_5 = data);

    this.http.get('assets/codes/change-detection/notes/code_6.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_6 = data);

    this.http.get('assets/codes/change-detection/notes/code_7.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_7 = data);

    this.http.get('assets/codes/change-detection/notes/code_8.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_8 = data);

    this.http.get('assets/codes/change-detection/notes/code_9.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_9 = data);

    this.http.get('assets/codes/change-detection/notes/code_10.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_10 = data);

    this.http.get('assets/codes/change-detection/notes/code_11.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_11 = data);

    this.http.get('assets/codes/change-detection/notes/code_12.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_12 = data);

    this.http.get('assets/codes/change-detection/notes/code_13.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_13 = data);

    this.http.get('assets/codes/change-detection/notes/code_14.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_14 = data);

    this.http.get('assets/codes/change-detection/notes/code_15.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_15 = data);



    this.http.get('assets/codes/change-detection/best/code_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_1 = data);

    this.http.get('assets/codes/change-detection/best/code_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_2 = data);

    this.http.get('assets/codes/change-detection/best/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_3 = data);

    this.http.get('assets/codes/change-detection/best/code_4.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_4 = data);

    this.http.get('assets/codes/change-detection/best/code_5.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_5 = data);

    this.http.get('assets/codes/change-detection/best/code_6.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_6 = data);

    this.http.get('assets/codes/change-detection/best/code_7.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_7 = data);

    this.http.get('assets/codes/change-detection/best/code_8.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_8 = data);

    this.http.get('assets/codes/change-detection/best/code_9.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.codeb_9 = data);
  }
}
