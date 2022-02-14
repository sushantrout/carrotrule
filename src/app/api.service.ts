import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "./model/user-model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(url: string) {
    return this.http.get(`${environment.api_url}${url}`);
  }

  public post(url: string, user: any) {
    return this.http.post(`${environment.api_url}${url}`, user);
  }
}
