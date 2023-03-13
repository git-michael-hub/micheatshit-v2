import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[copyToClipboard]'
})
export class CopyDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // create the "copy" button

  }

  ngAfterViewInit(): void {
    const button = this.renderer.createElement('button');
    const buttonText = this.renderer.createText('copy code');
    this.renderer.appendChild(button, buttonText);
    this.renderer.addClass(button, 'copy-button');
    this.renderer.addClass(button, 'p-2');
    // console.log('this.el.nativeElement:', this.el.nativeElement.innerHTML)
    this.renderer.appendChild(this.el.nativeElement.querySelector('.copy-button-wrapper'), button);

    // attach the click event handler to the "copy" button
    this.renderer.listen(button, 'click', () => {
      const text = this.el.nativeElement.querySelector('code').textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard');
        this.renderer.setValue(buttonText, 'copied 👍');
        setTimeout(() => {
          this.renderer.setValue(buttonText, 'copy code');
        }, 2000);
      }, (err) => {
        console.error('Failed to copy text: ', err);
      });
    });
  }

}
