import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-router-outlet',
  templateUrl: './router-outlet.component.html',
  styleUrls: ['./router-outlet.component.scss']
})
export class RouterOutletComponent extends UnsubscribeService {
  selectedTab = 1;

  code_1 = '';
  code_2 = '';
  code_2_1 = '';
  code_3 = '';
  code_3_1 = '';
  code_4 = '';
  code_5 = '';

  constructor(
    private http: HttpClient
  ) {
    super()
  }

  ngOnInit() {
    this.http.get('assets/codes/router-outlet/notes/code_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_1 = data);

    this.http.get('assets/codes/router-outlet/notes/code_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_2 = data);


    this.http.get('assets/codes/router-outlet/notes/code_2_1.txt', { responseType: 'text' })
    .pipe(takeUntil(this.toUnsubscribe$))
    .subscribe(data => this.code_2_1 = data);

    this.http.get('assets/codes/router-outlet/notes/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_3 = data);


    this.http.get('assets/codes/router-outlet/notes/code_3_1.txt', { responseType: 'text' })
    .pipe(takeUntil(this.toUnsubscribe$))
    .subscribe(data => this.code_3_1 = data);

    this.http.get('assets/codes/router-outlet/notes/code_4.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_4 = data);

    this.http.get('assets/codes/router-outlet/notes/code_5.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_5 = data);
  }
}


