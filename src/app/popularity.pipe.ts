import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post'

@Pipe({
  name: 'popularity',
  pure: false
})
export class PopularityPipe implements PipeTransform {

  transform(input: Post[]) {
    var output: Post[] = [];
    for (var i=0;i<input.length;i++) {
      if(input[i].popularity > 0) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
