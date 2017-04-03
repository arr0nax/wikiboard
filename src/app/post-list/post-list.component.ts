import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() categoryId: number;
  constructor() { }

  selectedPost: Post = null;
  posts: Post[] = [
    new Post('spookFan420','why no ghosts?','i love ghosts, but i havent seen any :( where are they?',3),
    new Post('booboo', 'im spooked', 'i saw a meme that was too scary and now i cant sleep or eat D:',3),
    new Post('braveboy', 'aint', 'afraid of no ghosts!!',3),
    new Post('Comrade85', 'question', 'why no potato?', 5)
  ]

  selectPost(post) {
    this.selectedPost = post;
  }
  ngOnInit() {
  }

}
