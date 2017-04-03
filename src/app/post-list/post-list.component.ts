import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GetVideoService } from '../get-video.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { GetFireService } from '../get-fire.service';

@Component({
  selector: 'app-post-list',
  providers: [GetFireService],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() categoryId: number;
  constructor(private sanitizer: DomSanitizer, private getVideo: GetVideoService, private fireService: GetFireService) { }

  posts;
  selectedPost: Post = null;
  safeVideo: SafeHtml = null;


  selectPost(post) {
    this.selectedPost = post;
    this.getVideo.search(post.title).subscribe(res => {
      post.videoUrl = res;
      console.log(post.videoUrl.items[0].id.videoId);
      var tempVideoUrl = '<iframe src="https://www.youtube.com/embed/' + post.videoUrl.items[0].id.videoId + '" width="700" height="500"></iframe>';
      this.safeVideo = this.sanitizer.bypassSecurityTrustHtml(tempVideoUrl);
    });
  }

  upVote(selectedPost) {
    selectedPost.popularity += 1;
  }

  downVote(selectedPost) {
    selectedPost.popularity -= 1;
  }

  ngOnInit() {
    this.fireService.fetchData().subscribe(
      data => { this.posts = data;
        console.log(data);
    })
  };

}
