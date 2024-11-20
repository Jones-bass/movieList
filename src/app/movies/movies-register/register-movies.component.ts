import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-perfil-cadastro',
  templateUrl: './register-movies.component.html',
  styleUrl: './register-movies.component.scss'
})
export class RegisterMoviesComponent {

  public carregando = false;

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
  }

  salvar() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.carregando = true;

    this.movieService.cadastrarFilme(this.formGroup.value).subscribe({
      next: () => this.onSuccess(),
      error: (error) => this.onError(error),
    });
  }

  private onSuccess() {
    this.carregando = false;
    this.toastr.success("Filme cadastrado com sucesso!");
    this.activeModal.close();
  }

  private onError(error: any) {
    this.carregando = false;
    if (error.error.errorCode === 400) {
      this.toastr.error(error.error.errorMessage);
    } else {
      this.toastr.error("Erro ao cadastrar, entre em contato com o administrador!");
    }
  }
}