import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';
import { MoviesRequest } from '../model/request/movies.request';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterMoviesComponent } from '../movies-register/register-movies.component';
import { ConfirmeModalService } from '../../shared/component/confirme-modal/confirme-modal.service';
import Swal from 'sweetalert2';

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
    private confirmModalService: ConfirmeModalService
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

  protected deletarFilme(movieId: string | undefined): void {
    this.confirmModalService
      .confirmDeletion("Atenção!", "Tem certeza que deseja excluir?")
      .then((result) => {
        if (result.isConfirmed) {
          this.excluirFilme(movieId as string);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log('Erro')
        }
      });
  }

  private excluirFilme(movieId: string): void {
    this.movieService.deletarFilme(movieId).subscribe({
      next: () => this.onDeleteSuccess(),
      error: (error) => this.onDeleteError(error),
    });
  }

  private onDeleteSuccess(): void {
    this.confirmModalService.showSuccessMessage(
      "Deletado!",
      "Deletado com sucesso!"
    );
  }

  private onDeleteError(error: any): void {
    this.confirmModalService.showErrorMessage(
      "Erro",
      "Erro ao excluir perfil"
    );
  }

  public openModal() {
    this.modalService.open(RegisterMoviesComponent);
  }
}

