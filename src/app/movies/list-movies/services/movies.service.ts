import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}filmes`)
      .pipe();
  }
}
