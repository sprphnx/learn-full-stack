import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  WelcomeDataService,
  GetHelloServiceResponse,
} from "../service/data/welcome-data.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
})
export class WelcomeComponent implements OnInit {
  welcomeMessage: String;
  errorMessage: String;

  constructor(
    private activatedRoute: ActivatedRoute,
    private welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.welcomeMessage =
      "Welcome " + this.activatedRoute.snapshot.params["name"];
  }

  getWelcomeMessage() {
    this.welcomeDataService.getHelloService().subscribe(
      (response) => this.handleResponse(response),
      (error) => this.handleError()
    );
  }

  private handleResponse(response: GetHelloServiceResponse): void {
    this.welcomeMessage = response.message;
  }

  private handleError(): void {
    this.errorMessage = "An error occured while retrieving the data";
  }
}
