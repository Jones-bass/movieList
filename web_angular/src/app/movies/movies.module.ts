import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { RegisterMoviesComponent } from './movies-register/register-movies.component';
import { ListMoviesComponent } from './movies-list/list-movies.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { CategoryPipe } from '../shared/pipes/category.pipe';

@NgModule({
  declarations: [
    ListMoviesComponent,
    RegisterMoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    MatIconModule,
    CategoryPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class MoviesModule { }
