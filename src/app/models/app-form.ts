import { User } from './user';

export declare type AppFormType = 'single-line' | 'multi-line' | 'checkbox' | 'radio' | 'date' | 'description' | 'image';

export interface AppForm {
  label?: string;
  description?: string;
  image?: string;
  type?: AppFormType;
  options?: Array<string>;
  required?: boolean;
  index?: string;
}

export interface Section {
  title?: string;
  forms: Array<AppForm>;
}

export interface AppForms {
  _id?: string;
  no?: number;
  title?: string;
  author?: User;
  sections?: Array<Section>;
  open?: boolean;
  response?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
