export class Post {
  public popularity: number = 7;
  constructor(public author: string, public title: string, public body: string, public videoUrl: string, public category: number) {};
}
