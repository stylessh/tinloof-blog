export interface Post {
  id: string;
  title: string;
  body: string;

  category: Category;
}

export interface Category {
  id: number;
  name: string;
  key: string;
}
