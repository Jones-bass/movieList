import { MoviesRequest } from "../request/movies.request";

export class MoviesResponse {
  id?: string;
  title?: string;
  category?: string;

  static converterParaModel(response: MoviesResponse): MoviesRequest {
    return new MoviesRequest(
      response.id ?? '',
      response.title ?? '',
      response.category ?? '',
    );
  }
}
