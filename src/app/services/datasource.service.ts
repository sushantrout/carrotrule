import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  private BASE_URL = "datasource/";
  constructor(private apiService : ApiService,
    private authService : AuthService) { }

  getDataSourceList() {
    let cust = this.authService.getUser();
    return this.apiService.post(`${this.BASE_URL}getDataSourceList`, cust);
  }
}
