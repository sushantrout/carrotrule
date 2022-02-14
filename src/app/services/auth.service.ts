import { Injectable } from "@angular/core";
import { CarrotruleUser } from "../model/user-model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  
  isLoggedIn: boolean = false;
  token?: string;
  loggedInUser : CarrotruleUser = new CarrotruleUser();
  constructor() {}

  getToken(): string | undefined {
    return this.token;
  }

  setToken(loggedInUser: CarrotruleUser) {
    this.isLoggedIn = true;
    this.token = loggedInUser.accessToken;
  }

  setUser(res: CarrotruleUser) {
    this.loggedInUser = res;
  }

  getUser() {
    return this.loggedInUser;
  }
}
