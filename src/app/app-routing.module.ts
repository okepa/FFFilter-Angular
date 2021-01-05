import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FanfictionCategoriesComponent } from './fanfiction-categories/fanfiction-categories.component';
import { CrossoverCategoriesComponent } from './crossover-categories/crossover-categories.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fanfiction-categories', component: FanfictionCategoriesComponent },
  {path: 'crossover-categories', component: CrossoverCategoriesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
