import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../services/movies.service';
import { MoviesRequest } from '../model/request/movies.request';

@Component({
  selector: 'app-perfil-cadastro',
  templateUrl: './register-movies.component.html',
  styleUrl: './register-movies.component.scss'
})
export class RegisterMoviesComponent {
  @Input() movie: MoviesRequest | null = null; 
  @Output() atualizarListaFilme = new EventEmitter<MoviesRequest>();

  public carregando = false;
  isEditMode = false;
  formGroup: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private movieService: MovieService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {

    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.movie) {
      this.isEditMode = true;
      this.formGroup.patchValue(this.movie);
    }
  }

  salvar() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.carregando = true;

    const request$ = this.isEditMode
    ? this.movieService.updateMovies(this.movie!.id as string, this.formGroup.value)
    : this.movieService.registerMovies(this.formGroup.value);

    request$.subscribe({
      next: (response) => this.onSuccess(response), 
      error: (error) => this.onError(error),
    });
  }

  private onSuccess(movie: MoviesRequest) {
    const mensagem = this.isEditMode
    ? "Filme atualizado com sucesso!"
    : "Filme cadastrado com sucesso!";
    this.carregando = false;
    this.toastr.success(mensagem);
    this.atualizarListaFilme.emit(movie); 
    this.activeModal.close();
  }

  private onError(error: any) {
    this.carregando = false;
    if (error.error.errorCode === 400) {
      this.toastr.error(error.error.errorMessage);
    } else {
      const mensagem = this.isEditMode
      ? "Erro ao atualizar, entre em contato com o administrador!"
      : "Erro ao cadastrar, entre em contato com o administrador!";
    this.toastr.error(mensagem);    }
  }
}