import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../../models/response';
import { Notice } from '../../../models/notice';
import { map } from 'rxjs/operators';

const BASE_URL = '/api/notices';

@Injectable()
export class NoticeService {

  constructor(private http: HttpClient) {
  }

  getNotices(): Observable<Notice[]> {
    return this.http.get<Response<Notice[]>>(BASE_URL).pipe(map(res => res.data));
  }

  getNotice(id: string): Observable<Notice> {
    return this.http.get<Response<Notice>>(`${BASE_URL}/${id}`).pipe(map(res => res.data));
  }

  createNotice(notice: Notice): Observable<string> {
    return this.http.post<Response<string>>(BASE_URL, notice).pipe(map(res => res.data));
  }

  updateNotice(id: string, updated: Notice): Observable<Response<undefined>> {
    return this.http.put<Response<undefined>>(`${BASE_URL}/${id}`, updated);
  }

  removeNotice(id: string): Observable<Response<undefined>> {
    return this.http.delete<Response<undefined>>(`${BASE_URL}/${id}`);
  }
}
