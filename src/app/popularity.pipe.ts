import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post'

@Pipe({
  name: 'popularity',
  pure: true
})
export class PopularityPipe implements PipeTransform {

  transform(input: Post[]) {
    if(!input){
      return [new Post("loading","","",100)];
    } else {
      var output: Post[] = [];
      for (var i=0;i<input.length;i++) {
        if(input[i].popularity > 0) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
