import { Component, Input } from "@angular/core";

@Component({
  selector: "app-loading-input",
  templateUrl: "./loading-input.component.html",
  styleUrl: "./loading-input.component.scss",
})
export class LoadingInputComponent {
  @Input() mostrar: boolean | undefined;
}
