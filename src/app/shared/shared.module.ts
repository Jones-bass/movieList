import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { FeathericonComponent } from "./component/feathericon/feathericon.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { LoadingListComponent } from "./component/loading-list/loading-list.component";


@NgModule({
  declarations: [
    FeathericonComponent,
    LoadingListComponent,
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
    LoadingListComponent,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}

