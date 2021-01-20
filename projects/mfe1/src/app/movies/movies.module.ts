import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { RouterModule } from '@angular/router';
import { MOVIES_ROUTES } from './movies.routes';
import { LazyComponent } from './lazy/lazy.component';



@NgModule({
  declarations: [MoviesSearchComponent, LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MOVIES_ROUTES)
  ]
})
export class MoviesModule { }
