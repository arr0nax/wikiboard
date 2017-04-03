import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Router } from '@angular/router'

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {

  constructor(private router: Router) {};

  categories: Category[] = [new Category("amazement",1), new Category("superlatives",2), new Category("ghost-memes",3), new Category("excellence",4), new Category("Gulag-instantiations",5)];

  goToCategoryPage(clickedCategory: Category) {
    this.router.navigate(['category', clickedCategory.id]);
  }


}
