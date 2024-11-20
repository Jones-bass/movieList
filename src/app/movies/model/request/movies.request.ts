
export class MoviesRequest {
  _id: string;
  title: string;
  category: string;

  constructor(
    _id: string,
    title: string,
    category: string,
  ) {
    this._id = _id;
    this.title = title;
    this.category = category;
  }
}


