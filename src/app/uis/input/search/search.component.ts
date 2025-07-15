import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'ui-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="relative flex items-center">
      <input
        #searchBox
        type="text"
        name="input-search"
        id="search"
        placeholder="Search..."
        class="
          h-[38px] pl-[16px]
          block w-full
          rounded-md
          border-gray-300 pr-12 shadow-sm focus:border-indigo-500
          focus:ring-indigo-500 sm:text-sm disabled:bg-gray-100
        "
        [(ngModel)]="searchTerm"
        [disabled]="isDisabled"
        (keyup)="search(searchBox.value)"
        autocomplete="off"
      >
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd class="inline-flex items-center rounded px-2 font-sans text-sm font-medium text-gray-400">
          <i class="fa fa-search"></i>
        </kbd>
      </div>
    </div>
  `
})
export class SearchComponent implements AfterViewInit {
  @Input() isDisabled: boolean = false;
  @Input() searchTerm: string = '';

  @Output() searchTermFn = new EventEmitter();

  @ViewChild('searchBox') searchBoxRef!: ElementRef<HTMLInputElement>;


  ngAfterViewInit(): void {
    this.searchBoxRef.nativeElement.focus();
  }

  search(term: string) {
    this.searchTermFn.emit(term);
  }
}
