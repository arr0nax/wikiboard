import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post'

@Pipe({
  name: 'category',
  pure: true
})
export class CategoryPipe implements PipeTransform {

  transform(input: Post[], categoryId) {
    if(!input){
      return [new Post("loading","","",100)];
    } else {
      var output: Post[] = [];
      for (var i=0; i<input.length; i++) {
        if(input[i].category === categoryId) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
