import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HighlightLoader, HighlightAutoResult } from 'ngx-highlightjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { takeUntil } from 'rxjs';

const themeGithub: string = 'node_modules/highlight.js/styles/github.css';
const themeAndroidStudio: string = 'node_modules/highlight.js/styles/androidstudio.css';

@Component({
  selector: 'app-aot',
  templateUrl: './aot.component.html',
  styleUrls: ['./aot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AotComponent extends UnsubscribeService {
  selectedTab = 1;

  // response!: HighlightAutoResult;

  code_3 = '';
  code_5 = '';
  code_6 = '';
  code_7 = '';
  code_8 = '';
  code_9_1 = '';
  code_9_2 = '';
  code_10 = '';
  code_11 = '';
  code_14 = '';
  code_15 = '';
  code_16 = '';
  code_17 = '';
  code_18 = '';
  code_19 = '';
  code_20 = '';
  code_21 = '';

  // currentTheme: string = themeGithub;

  constructor(
    // private hljsLoader: HighlightLoader,
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    this.http.get('assets/codes/aot/notes/code_3.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_3 = data);

    this.http.get('assets/codes/aot/notes/code_5.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_5 = data);

    this.http.get('assets/codes/aot/notes/code_6.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_6 = data);

    this.http.get('assets/codes/aot/notes/code_7.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_7 = data);

    this.http.get('assets/codes/aot/notes/code_8.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_8 = data);

    this.http.get('assets/codes/aot/notes/code_9_1.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_9_1 = data);

    this.http.get('assets/codes/aot/notes/code_9_2.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_9_2 = data);

    this.http.get('assets/codes/aot/notes/code_10.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_10 = data);

    this.http.get('assets/codes/aot/notes/code_11.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_11 = data);

    this.http.get('assets/codes/aot/notes/code_14.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_14 = data);

    this.http.get('assets/codes/aot/notes/code_15.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_15 = data);

    this.http.get('assets/codes/aot/notes/code_16.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_16 = data);

    this.http.get('assets/codes/aot/notes/code_17.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_17 = data);

    this.http.get('assets/codes/aot/notes/code_18.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_18 = data);

    this.http.get('assets/codes/aot/notes/code_19.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_19 = data);

    this.http.get('assets/codes/aot/notes/code_20.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_20 = data);

    this.http.get('assets/codes/aot/notes/code_21.txt', { responseType: 'text' })
      .pipe(takeUntil(this.toUnsubscribe$))
      .subscribe(data => this.code_21 = data);
  }


  // onHighlight(e: HighlightAutoResult) {
  //   this.response = {
  //     language: e.language,
  //     relevance: e.relevance,
  //     secondBest: '{...}',
  //     value: '{...}',
  //   };
  // }

  // changeTheme() {
  //   this.currentTheme = this.currentTheme === themeGithub ? themeAndroidStudio : themeGithub;
  //   this.hljsLoader.setTheme(this.currentTheme);
  // }
}




