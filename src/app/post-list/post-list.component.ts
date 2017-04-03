import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GetVideoService } from '../get-video.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() categoryId: number;
  constructor(private sanitizer: DomSanitizer, private getVideo: GetVideoService) { }


  selectedPost: Post = null;
  safeVideo: SafeHtml = null;

  posts: Post[] = [
    new Post('spookFan420','why no ghosts?','i love ghosts, but i havent seen any :( where are they?', 'https://www.youtube.com/embed/m9We2XsVZfc', 3),
    new Post('booboo', 'im spooked', 'i saw a meme that was too scary and now i cant sleep or eat D:','https://www.youtube.com/embed/m9We2XsVZfc',3),
    new Post('braveboy', 'aint', 'afraid of no ghosts!!','https://www.youtube.com/embed/m9We2XsVZfc',3),
    new Post('Comrade85', 'question', 'why no potato?','https://www.youtube.com/embed/m9We2XsVZfc',5)
  ]

  selectPost(post) {
    this.getVideo.search(post.author);
    this.selectedPost = post;
    var tempVideo = '<iframe src="' + post.videoUrl + '" width="700" height="500"></iframe>';
    this.safeVideo = this.sanitizer.bypassSecurityTrustHtml(tempVideo);
  }
  ngOnInit() {
  }

}
