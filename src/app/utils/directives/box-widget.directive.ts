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
    const html = (id: number) =>  `
      <div
        style="left: ${this.el.nativeElement.getBoundingClientRect().left}px"
        class="box-pop-${id} flex flex-row justify-between bg-white text-rose-400 absolute z-50 w-[312px] h-64 mb-8 bottom-0  border-2 border-indigo-500/100">

        <span>${this.appBoxWidgetData.name}</span>
        <span id="close">close</span>

      </div>
    `;
    // this.renderer.setProperty(this.el.nativeElement.querySelector(`.box-pop-${this.el.nativeElement.id}`), 'innerHTML', html);
    // const hostElement = this.el.nativeElement.querySelector('[appBoxWidget]');

    // console.log('hostElement:', hostElement)
    const parentElement = this.renderer.parentNode(this.el.nativeElement);

    console.log('parentElement:', parentElement);

    const id = this.el.nativeElement.id;

    if (parentElement) {
      const box = parentElement.querySelector(`.box-pop-${id}`);

      if (box) return;

      const childEl = this.renderer.createElement('div');

      // this.renderer.addClass(parentElement.querySelector(`.box-pop`), `box-pop-${this.el.nativeElement.id}`);
      if (childEl) this.renderer.appendChild(childEl, html(id));
      if (this.el.nativeElement) this.renderer.appendChild(this.el.nativeElement, childEl);
    }

    // console.log("sssss----",this.el.nativeElement.getBoundingClientRect().left);


    // this.renderer.listen(this.el.nativeElement.querySelector('#close'), 'click', () => {
    //   console.log('Clicked');
    // });
  }
}
