import { Injectable } from "@angular/core";
import { stringify } from "querystring";

@Injectable({
  providedIn: "root",
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string): boolean {
    console.log("Before: " + this.isUserLoggedIn());
    if (username === "rohananoop" && password === "dummy") {
      sessionStorage.setItem("authenticatedUser", username);
      console.log("After: " + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    let user: string = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}
