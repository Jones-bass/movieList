import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesRequest } from '../model/request/movies.request';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://localhost:8080/api/movies';

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list`)
      .pipe();
  }

  public registerMovies(movie: MoviesRequest): Observable<MoviesRequest> {
    return this.http.post<MoviesRequest>(`${this.apiUrl}/create`, movie).pipe();
  }

  public deleteMovies(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe();
  }

  public updateMovies(id: string, movie: MoviesRequest): Observable<MoviesRequest> {
    return this.http
      .put<MoviesRequest>(`${this.apiUrl}/${id}`, movie)
      .pipe();
  }
}
