import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { GetVideoService } from './get-video.service'
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { routing } from './app.routing';
import { CategoryComponent } from './category/category.component';
import { PostListComponent } from './post-list/post-list.component';
import { CategoryPipe } from './category.pipe';
import { PopularityPipe } from './popularity.pipe';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDdgDzVt5NGGSf3kly85cYnUTJeyj2Zs0E",
   authDomain: "wiki-board-e00b0.firebaseapp.com",
   databaseURL: "https://wiki-board-e00b0.firebaseio.com",
   projectId: "wiki-board-e00b0",
   storageBucket: "wiki-board-e00b0.appspot.com"
}
@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    CategoryComponent,
    PostListComponent,
    CategoryPipe,
    PopularityPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ GetVideoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
