import { AfterViewInit, Component, Input } from "@angular/core";
import * as feather from "feather-icons";

@Component({
  selector: "app-feathericon",
  templateUrl: "./feathericon.component.html",
  styleUrls: ["./feathericon.component.scss"],
})
export class FeathericonComponent implements AfterViewInit {
  @Input() public icon: string | undefined;
  @Input() class!: string;

  ngAfterViewInit() {
    feather.replace();
  }
}
