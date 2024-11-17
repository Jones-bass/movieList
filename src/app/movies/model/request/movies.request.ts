
export class MoviesRequest {
  _id: string;
  name: string;
  category: string;

  constructor(
    _id: string,
    name: string,
    category: string,
  ) {
    this._id = _id;
    this.name = name;
    this.category = category;
  }
}


