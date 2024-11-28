import { Component, EventEmitter, Output } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-filtro",
  templateUrl: "./filtro.component.html",
  styleUrl: "./filtro.component.scss",
})
export class FiltroComponent implements OnInit {
  @Output() pesquisar = new EventEmitter<string>();
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.buscarFilme();
  }

  public buscarFilme() {
    this.form.reset();
  }

  public _pesquisar() {
    this.pesquisar.emit(this.form.value.title);
  }
}
