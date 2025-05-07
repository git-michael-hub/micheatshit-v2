import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoxWidget]'
})
export class BoxWidgetDirective {
  // @Input() set text(value: string) {
  //   const html = `
  //     <span>
  //       <strong class="text-sky-600 text-xl">${value.charAt(0).toUpperCase()}</strong>${value.slice(1).trim()}
  //     </span>
  //   `;
  //   this.renderer.setProperty(this.el.nativeElement, 'innerHTML', html);
  // };

  @Input() appBoxWidgetData!: {name: string};

  // @Input() appBoxWidgetIsClosed!: boolean;
  @Input() set appBoxWidgetIsClosed(id: number) {
    console.log('asdf:',id)
    // if (!id) return;
    // console.log('this.el.nativeElement.id:', this.el.nativeElement.id)



    // const boxPop = this.el.nativeElement.querySelector(`.box-pop-${id}`);
    // if (boxPop) this.renderer.setProperty(boxPop, 'innerHTML', '');





  //   console.log('box:', truthy);
  //   if (!truthy) return;

  //   this.renderer.setProperty(this.el.nativeElement.querySelector('.box-pop'), 'innerHTML', '');
  };



  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {


  }

  // ngOnChanges(): void {

  // }

  ngAfterViewInit(): void {
    const id = this.el.nativeElement.id;
    const parentElement = this.renderer.parentNode(this.el.nativeElement);

    console.log('parentElement:', parentElement);

    if (parentElement) {
      const existingBox = parentElement.querySelector(`.box-pop-${id}`);
      if (existingBox) return;

      // Create main container div
      const containerDiv = this.renderer.createElement('div');
      this.renderer.addClass(containerDiv, `box-pop-${id}`);
      this.renderer.addClass(containerDiv, 'flex');
      this.renderer.addClass(containerDiv, 'flex-row');
      this.renderer.addClass(containerDiv, 'justify-between');
      this.renderer.addClass(containerDiv, 'bg-white');
      this.renderer.addClass(containerDiv, 'text-rose-400');
      this.renderer.addClass(containerDiv, 'absolute');
      this.renderer.addClass(containerDiv, 'z-50');
      this.renderer.addClass(containerDiv, 'w-[312px]');
      this.renderer.addClass(containerDiv, 'h-64');
      this.renderer.addClass(containerDiv, 'mb-8');
      this.renderer.addClass(containerDiv, 'bottom-0');
      this.renderer.addClass(containerDiv, 'border-2');
      this.renderer.addClass(containerDiv, 'border-indigo-500/100');

      // Set the left position
      this.renderer.setStyle(
        containerDiv,
        'left',
        `${this.el.nativeElement.getBoundingClientRect().left}px`
      );

      // Create name span
      const nameSpan = this.renderer.createElement('span');
      const nameText = this.renderer.createText(this.appBoxWidgetData.name);
      this.renderer.appendChild(nameSpan, nameText);

      // Create close span
      const closeSpan = this.renderer.createElement('span');
      this.renderer.setAttribute(closeSpan, 'id', 'close');
      const closeText = this.renderer.createText('close');
      this.renderer.appendChild(closeSpan, closeText);

      // Append spans to container
      this.renderer.appendChild(containerDiv, nameSpan);
      this.renderer.appendChild(containerDiv, closeSpan);

      // Append container to host element
      this.renderer.appendChild(this.el.nativeElement, containerDiv);
    }

    // this.renderer.listen(this.el.nativeElement.querySelector('#close'), 'click', () => {
    //   console.log('Clicked');
    // });
  }
}
