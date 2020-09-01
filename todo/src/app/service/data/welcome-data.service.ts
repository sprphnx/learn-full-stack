import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WelcomeDataService {
  constructor(private httpClient: HttpClient) {}

  getHelloService() {
    return this.httpClient.get<GetHelloServiceResponse>(
      "http://localhost:8088/greetings/say-hello"
    );
  }
}

export class GetHelloServiceResponse {
  constructor(public message: String) {}
}
