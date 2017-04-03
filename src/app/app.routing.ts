import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { CategoryComponent } from './category/category.component';

const appRoutes: Routes = [
  {
     path: '',
     component: SplashComponent
   },
   {
     path: 'category/:id',
     component: CategoryComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
