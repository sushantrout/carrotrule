import { Component, OnInit } from "@angular/core";
import { CarrotruleUser, LoginUser, User } from "src/app/model/user-model";
import { AuthService } from "src/app/services/auth.service";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService,
    private authService : AuthService) {}

  ngOnInit(): void {}

  login(user: LoginUser) {
    this.loginService.login(user).subscribe((res : CarrotruleUser) => {
      this.authService.setToken(res);
    });
  }
}
