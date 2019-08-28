import { Pipe, PipeTransform } from '@angular/core';
import { course } from '../model/course';

@Pipe({
  name: 'filtercourse'
})
export class FiltercoursePipe implements PipeTransform {

  transform(courses: course[], range: string): any {
      if(range=="High Price")
         return courses.filter(x=>x.price>=25000);
      else if(range=="Moderate Price")
         return courses.filter(x=>x.price>=20000&&x.price<25000);
      else if(range=="Low Price")
         return courses.filter(x=>x.price<20000)
      else
         return courses;
  }

}
