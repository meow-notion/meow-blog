export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  profilePhoto: string;
}

export interface Post {
  id: string;
  name: string;
  tag: string;
  published: boolean;
  date: string;
  slug: string;
  author: Author[];
  preview: string;
  views: number;
}

export interface PostView {
  key: string;
  value: number;
}
