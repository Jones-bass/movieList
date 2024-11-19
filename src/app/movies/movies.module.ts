import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { RegisterMoviesComponent } from './register-movies/register-movies.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';


@NgModule({
  declarations: [
    ListMoviesComponent,
    RegisterMoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
  ],
  
})
export class MoviesModule { }
