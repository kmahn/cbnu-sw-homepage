import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  static isVendorRequest(url: string): boolean {
    return !url.startsWith('/');
  }

  constructor(private storage: StorageService,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (AuthInterceptor.isVendorRequest(req.url)) {
      return next.handle(req);
    }

    if (isPlatformBrowser(this.platformId)) {
      const token = this.storage.get<string>('token');
      if (token) {
        req = req.clone({
          setHeaders: { 'x-access-token': token }
        });

        return next.handle(req).pipe(
          catchError((err: HttpErrorResponse) => {
            if (err.status === 401) {
              this.storage.remove('token');
              this.router.navigate(['/account', 'login']);
            }
            return throwError(err);
          })
        );
      }
    }

    return next.handle(req);
  }
}
