import { MediaMatcher } from "@angular/cdk/layout";
import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { MenuModel } from "./model/menu.model";
import { CarrotruleUser, LoginUser, User } from "./model/user-model";
import { AuthService } from "./services/auth.service";
import { DatasourceService } from "./services/datasource.service";
import { LoginService } from "./services/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnDestroy, OnInit {
  title = "carrotrule";
  mobileQuery: MediaQueryList;
  menuList: MenuModel[] = [];

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private loginService: LoginService,
    private authService: AuthService,
    private datasourceService : DatasourceService,
    private http: HttpClient
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    let user: LoginUser = new LoginUser();
    user.username = "mk48@gmail.com";
    user.password = "1234567";
    this.loginService.login(user).subscribe((res: CarrotruleUser) => {
      this.authService.setToken(res);
      this.authService.setUser(res);
      this.datasourceService.getDataSourceList().subscribe(res => {
        console.table(res);
      });
    });
    this.http.get("assets/side-menu.json").subscribe((res: any) => {
      this.menuList = res.mainMenu;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  private _mobileQueryListener: () => void;
}
