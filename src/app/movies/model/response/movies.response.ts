import { MoviesRequest } from "../request/movies.request";

export class MoviesResponse {
  _id?: string;
  title?: string;
  category?: string;

  static converterParaModel(response: MoviesResponse): MoviesRequest {
    return new MoviesRequest(
      response._id ?? '',
      response.title ?? '',
      response.category ?? '',
    );
  }
}
