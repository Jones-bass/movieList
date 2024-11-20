
export class MoviesRequest {
  id: string;
  title: string;
  category: string;

  constructor(
    id: string,
    title: string,
    category: string,
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
  }
}


