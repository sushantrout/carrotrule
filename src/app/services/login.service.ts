import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { CarrotruleUser, LoginUser, User } from "../model/user-model";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private BASE_URL = "auth/sign_in";

  constructor(private apiService: ApiService) {}

  login(user: LoginUser) {
    return this.apiService.post(`${this.BASE_URL}`, user);
  }
}
