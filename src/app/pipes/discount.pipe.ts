import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: any, parameter?: any): any {
      if(price>=28000)
          return price-price*0.13;
      else if(price>=24000)
           return price-price*0.10;
      else if(price>=20000)
           return price-price*0.08;
      else
           return price-price*0.05;

  }

}
