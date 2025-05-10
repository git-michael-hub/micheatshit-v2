import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';

@Component({
  selector: 'app-unidirectional-data-flow',
  templateUrl: './unidirectional-data-flow.component.html',
  styleUrls: ['./unidirectional-data-flow.component.scss']
})
export class UnidirectionalDataFlowComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  code_1 = '';
  code_2 = '';
  code_3 = '';
  code_4 = '';
  code_5 = '';
  code_6 = '';
  code_7 = '';
  code_8 = '';

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit(): void {
    this.http.get('assets/codes/unidirectional-data-flow/notes/code_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_1 = data);

    this.http.get('assets/codes/unidirectional-data-flow/notes/code_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_2 = data);

    this.http.get('assets/codes/unidirectional-data-flow/notes/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_3 = data);

    this.http.get('assets/codes/unidirectional-data-flow/notes/code_4.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_4 = data);

    this.http.get('assets/codes/unidirectional-data-flow/notes/code_5.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_5 = data);

    this.http.get('assets/codes/unidirectional-data-flow/notes/code_6.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_6 = data);

    this.http.get('assets/codes/unidirectional-data-flow/notes/code_7.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_7 = data);

    this.http.get('assets/codes/unidirectional-data-flow/notes/code_8.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_8 = data);
  }
}
