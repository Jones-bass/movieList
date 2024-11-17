import { MoviesRequest } from "../request/movies.request";

export class MoviesResponse {
  _id?: string;
  name?: string;
  category?: string;

  static converterParaModel(response: MoviesResponse): MoviesRequest {
    return new MoviesRequest(
      response._id ?? '',
      response.name ?? '',
      response.category ?? '',
    );
  }
}
