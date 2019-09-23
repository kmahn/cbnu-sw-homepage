export interface Notice {
  _id?: string;
  no?: number;
  title: string;
  author?: string;
  content: string;
  hits: string;
  createdAt: Date;
  updatedAt: Date;
}
