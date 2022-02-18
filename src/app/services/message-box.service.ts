import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { MessageModelResponse } from '../model/message-box-model';

@Injectable({
  providedIn: 'root',
})
export class MessageBoxService {
  constructor(private apiService: ApiService) {}

  getAll(url: string): any {
    return this.apiService.get(url);
  }
}
