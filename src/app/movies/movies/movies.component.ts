import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movies.service';
import { MoviesRequest } from '../model/request/movies.request';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})

export class MoviesComponent implements OnInit {

  public movies: MoviesRequest[] = []; 

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
   
    this.getMovies();
  }
 
  private getMovies() {
    this.movieService.getMovies().subscribe({
      next: (response) => {
        this.movies = response; 
        console.log(response)
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
        alert('Falha na conexão');
      },
    });
  }
}  


