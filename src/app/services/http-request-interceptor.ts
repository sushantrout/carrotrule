import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class BasicHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isLoggedIn: boolean = this.authService.isLoggedIn;

    if (isLoggedIn) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.authService.getToken()}`},
      });
    }
    
    return next.handle(request);
  }
}
