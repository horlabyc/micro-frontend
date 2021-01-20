import { Routes } from "@angular/router";
import { MoviesSearchComponent } from "./movies-search/movies-search.component";

export const MOVIES_ROUTES: Routes = [
  {
    path: 'movies-search',
    component: MoviesSearchComponent
  }
]