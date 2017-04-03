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

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    CategoryComponent,
    PostListComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ GetVideoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
