import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppForms } from '../../../../models/app-form';
import { Questionnaire } from '../../../../models/questionnaire';
import { Response } from '../../../../models/response';

const BASE_URL = '/api/forms';

@Injectable()
export class AppFormsService {
  constructor(private http: HttpClient) {
  }

  getForms(): Observable<AppForms[]> {
    return this.http.get<Response<AppForms[]>>(BASE_URL).pipe(map(res => res.data));
  }

  getMyForms(): Observable<AppForms[]> {
    return this.http.get<Response<AppForms[]>>(`${BASE_URL}/me`).pipe(map(res => res.data));
  }

  getOpenForms(): Observable<AppForms[]> {
    return this.http.get<Response<AppForms[]>>(`${BASE_URL}/open`).pipe(map(res => res.data));
  }

  getForm(id: string): Observable<AppForms> {
    return this.http.get<Response<AppForms>>(`${BASE_URL}/${id}`).pipe(map(res => res.data));
  }

  getQuestionnaires(id: string): Observable<Questionnaire[]> {
    return this.http.get<Response<Questionnaire[]>>(`${BASE_URL}/${id}/questionnaires`).pipe(map(res => res.data));
  }

  createForm(form: AppForms): Observable<boolean> {
    return this.http.post<Response<undefined>>(BASE_URL, form).pipe(map(res => res.success));
  }

  submitQuestionnaire(id: string, questionnaire: Questionnaire): Observable<boolean> {
    return this.http.post<Response<undefined>>(`${BASE_URL}/${id}/submit`, questionnaire).pipe(map(res => res.success));
  }

  updateForm(id: string, updated: AppForms): Observable<boolean> {
    return this.http.put<Response<undefined>>(`${BASE_URL}/${id}`, updated).pipe(map(res => res.success));
  }

  setOpen(id: string, open: boolean): Observable<boolean> {
    return this.http.patch<Response<undefined>>(`${BASE_URL}/${id}/open`, { open }).pipe(map(res => res.success));
  }

  setResponse(id: string, response: boolean): Observable<boolean> {
    return this.http.patch<Response<undefined>>(`${BASE_URL}/${id}/response`, { response }).pipe(map(res => res.success));
  }

  removeForm(id: string): Observable<boolean> {
    return this.http.delete<Response<undefined>>(`${BASE_URL}/${id}`).pipe(map(res => res.success));
  }
}
