import { User } from './user';

export interface Notice {
  _id?: string;
  no?: number;
  title: string;
  author?: User;
  content: string;
  hits: string;
  createdAt: Date;
  updatedAt: Date;
}
