import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PageHeaderComponent } from "./component/page-header/page-header.component";
import { PageFooterComponent } from "./component/page-footer/page-footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CarrotruleMaterialModule } from "./shared/carrotrule-material/carrotrule-material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from "./component/login/login.component";
import { BasicHttpInterceptor } from "./services/http-request-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CarrotruleMaterialModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
