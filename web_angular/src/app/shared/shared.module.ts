import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { FeathericonComponent } from "./component/feathericon/feathericon.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { FiltroComponent } from "./component/filtro/filtro.component";
import { LoadingInputComponent } from "./component/loading-input/loading-input.component";

@NgModule({
  declarations: [
    FeathericonComponent,
    FiltroComponent, 
    LoadingInputComponent  
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    FeathericonComponent,  
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FiltroComponent,
    LoadingInputComponent
  ],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

