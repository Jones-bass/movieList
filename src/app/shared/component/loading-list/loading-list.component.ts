import { Component, Input } from "@angular/core";

@Component({
  selector: "app-loading-list",
  templateUrl: "./loading-list.component.html",
  styleUrl: "./loading-list.component.scss",
})
export class LoadingListComponent {
  @Input() mostrar: boolean | undefined;
}
