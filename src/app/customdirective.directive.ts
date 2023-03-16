import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = "red";
    el.nativeElement.style.color = "white";
    el.nativeElement.style.fontSize = "30px";
   }

}
