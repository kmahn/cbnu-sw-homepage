import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../models/user';
import { Response } from '../../../models/response';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

const BASE_URL = '/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private storage: StorageService,
              private http: HttpClient) {
    if (this.loggedIn) {
      this.getMe();
    }
  }

  get loggedIn(): boolean {
    return !!this.storage.get('token');
  }

  get me(): User {
    return this.userSubject.value;
  }

  getMe(): void {
    this.http.get<Response<User>>(`${BASE_URL}/me`)
      .subscribe(
        res => {
          const me = res.data;
          this.userSubject.next(me);
        },
        err => {
          this.userSubject.next(null);
          this.storage.remove('token');
        }
      );
  }

  loginAdmin(username: string, password: string): Observable<string> {
    return this.http.post<Response<string>>(`${BASE_URL}/login/admin`, { username, password }).pipe(
      map(res => res.data),
      tap(token => {
        this.storage.set('token', token);
        this.getMe();
      })
    );
  }

  logout() {
    this.storage.remove('token');
    this.userSubject.next(null);
  }
}
