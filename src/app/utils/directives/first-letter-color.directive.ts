import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFirstLetterColor]'
})
export class FirstLetterColorDirective {
  @Input() set text(value: string) {
    const html = `
      <span>
        <strong class="text-sky-600 text-xl">${value.charAt(0).toUpperCase()}</strong>${value.slice(1).trim()}
      </span>
    `;
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', html);
  };

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {}
}

