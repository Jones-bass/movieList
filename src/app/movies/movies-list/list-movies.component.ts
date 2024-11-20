import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { MoviesRequest } from '../model/request/movies.request';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterMoviesComponent } from '../movies-register/register-movies.component';

@Component({
  selector: 'app-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})

export class ListMoviesComponent implements OnInit {

  public movies: MoviesRequest[] = [];

  public carregando = false;

  constructor(
    private movieService: MovieService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {

    this.getMovies();
  }

  private getMovies() {
    this.carregando = true;

    this.movieService.getMovies().subscribe({
      next: (response) => {
        this.movies = response;
        console.log(response);
        this.carregando = false;
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
        this.carregando = false;
      },
    });
  }


  public openModal() {
    this.modalService.open(RegisterMoviesComponent);
  }
}

