import { MediaMatcher } from "@angular/cdk/layout";
import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { MenuModel } from "./model/menu.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnDestroy, OnInit {
  title = "carrotrule";
  mobileQuery: MediaQueryList;
  menuList : MenuModel[]= [];

  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private http : HttpClient) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.http.get("assets/side-menu.json").subscribe((res : any) =>{
      this.menuList = res.mainMenu;
    });
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  private _mobileQueryListener: () => void;
  
}
