import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesRequest } from '../model/request/movies.request';

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

  public cadastrarFilme(movie: MoviesRequest): Observable<MoviesRequest> {
    return this.http.post<MoviesRequest>(`${this.apiUrl}filmes`, movie).pipe();
  }
}
