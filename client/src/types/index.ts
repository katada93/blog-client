export interface IUser {
  _id: string;
  name: string;
  email: string;
  img?: string;
}

export interface ICategory {
  _id: string;
  name: string;
}

export interface IPost {
  _id: string;
  title: string;
  description: string;
  img?: string;
  user: IUser;
  category: ICategory[];
  likes: string[];
  createdAt: string;
  updatedAt: string;
}