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
  styleUrl: './list-movies.component.scss',
})

export class ListMoviesComponent implements OnInit {

  public movies: MoviesRequest[] = [];

  public carregando = false;
  
  public pesquisa: Partial<MoviesRequest> = {}; 
  filtro = { valueStatus: null, tipoStatus: null };
  limpaFiltros = false;

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private movieService: MovieService,
    private modalService: NgbModal,
    private confirmModalService: ConfirmeModalService
  ) { }

  ngOnInit(): void {
    this.resetPesquisa();
    this.getMovies();
  }

  private resetPesquisa(): void {
    this.pesquisa = { title: '' }; 
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
    if (!movieId) {
      console.error("ID do filme é indefinido");
      return;
    }
    
    const movieToDelete = this.movies.find((movie) => movie.id === movieId);

    if (!movieToDelete) {
      console.error("Filme não encontrado na lista");
      return;
    }

    this.confirmModalService
      .confirmDeletion(
        "Atenção!",
        `Tem certeza que deseja excluir o filme "${movieToDelete.title}"?`)
      .then((result) => {
        if (result.isConfirmed) {
          this.excluirFilme(movieId as string);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          console.log('Erro')
        }
      });
  }

  private excluirFilme(movieId: string): void {
    this.movieService.deleteMovies(movieId).subscribe({
      next: () => {
        this.movies = this.movies.filter((movie) => movie.id !== movieId);
        this.onDeleteSuccess();
      },
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

  public abrirModalEditar(movie: MoviesRequest) {
    const modalRef = this.modalService.open(RegisterMoviesComponent);
    modalRef.componentInstance.movie = movie;

    modalRef.componentInstance.atualizarListaFilme.subscribe((updatedMovie: MoviesRequest) => {
      this.movies.findIndex((m) => m.id === updatedMovie.id);

    });
    modalRef.result.then(() => this.getMovies(), () => { });
  }

  public openModal() {
    const modalRef = this.modalService.open(RegisterMoviesComponent);

    modalRef.componentInstance.atualizarListaFilme.subscribe((newMovie: MoviesRequest) => {
      this.movies.push(newMovie);
    });
  }

  public pesquisar(title: string): void {
    if (title.trim() !== '') {
      this.pesquisa.title = title; 
      this.filtrarFilmes();
      this.limpaFiltros = true;
    } else {
      this.resetPesquisa();
      this.getMovies(); // Recarrega todos os filmes se o filtro estiver vazio
    }
  }

  private filtrarFilmes(): void {
    const titleFiltrado = this.pesquisa.title?.toLowerCase() || '';
    this.movies = this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(titleFiltrado)
    );
  }

  public limparFiltros(): void {
    this.resetPesquisa();
    this.getMovies();
    this.limpaFiltros = false;
  }
}

