import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://127.0.0.1:5000';  // Flask API URL

  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
