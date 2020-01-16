import { AppForm } from './app-form';

export interface Questionnaire {
  _id?: string;
  contents: Array<{ [key: string]: any; }>;
  form: string | AppForm;
  createdAt: Date;
}
