import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { RegisterMoviesComponent } from './movies-register/register-movies.component';
import { ListMoviesComponent } from './movies-list/list-movies.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListMoviesComponent,
    RegisterMoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ],
  
})
export class MoviesModule { }
