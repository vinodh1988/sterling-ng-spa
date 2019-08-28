import { Directive, Input, ElementRef, HostListener, Renderer, HostBinding, AfterViewChecked, OnInit } from '@angular/core';

@Directive({
  selector: '[price]'
})
export class PriceDirective implements OnInit{


@Input() price:number;
@HostBinding('style.color') fcolor:string;
  constructor(private el:ElementRef,private r:Renderer) { 
    console.log("price::"+this.price);
    
  }

  ngOnInit(){
    if(this.price>=25000)
        this.fcolor="darkblue";
    else if(this.price>=20000&&this.price<25000)
        this.fcolor="green";
    else
        this.fcolor="tomato";
  }

  @HostListener('mouseover')
  changeBorder()
  {
    
      if(this.price>=25000)
          this.el.nativeElement.style.border="2px solid red";
      else if(this.price>=22000&&this.price<25000)
          this.el.nativeElement.style.border="2px solid green";
      else if(this.price>=20000&&this.price<22000)
           this.el.nativeElement.style.border="2px solid darkblue";
      else
           this.el.nativeElement.style.border="2px solid darkgray";
  }

  @HostListener("mouseleave")
   retainOriginal(){
    this.el.nativeElement.style.border="none";
   }
}
