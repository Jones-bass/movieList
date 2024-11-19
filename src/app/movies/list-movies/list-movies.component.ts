import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movies.service';
import { MoviesRequest } from '../model/request/movies.request';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterMoviesComponent } from '../register-movies/register-movies.component';

@Component({
  selector: 'app-movies',
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})

export class ListMoviesComponent implements OnInit {

  public movies: MoviesRequest[] = [];

  constructor(
    private movieService: MovieService,
    private modalService: NgbModal,
  ) { }

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

  public openModal() {
    const modalRef = this.modalService.open(RegisterMoviesComponent);

  }
}

