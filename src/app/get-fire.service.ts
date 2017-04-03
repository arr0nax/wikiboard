import { Injectable } from '@angular/core';
import { Post } from './post';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class GetFireService {

  constructor(private angularFire: AngularFire) {
    this.posts = angularFire.database.list('posts');
  }

  posts: FirebaseListObservable<Post[]>;

  fetchData(){
    console.log(this.posts)
    return this.posts;
  }

  addPost(newPost: Post){
    this.posts.push(newPost);
  }


}
