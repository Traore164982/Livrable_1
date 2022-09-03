import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[],filterString:any): any[] {
    const results:any[]=[]
    if(!value || filterString==''){
      return value;
    }
    value.forEach((element:any)=> {
      console.log(element,'traaaaa');
      
      if(element.title.includes(filterString)){
        results.push(element);
      }
    });
    return results;
  }

}
