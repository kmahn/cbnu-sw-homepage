import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../environments/environment';

const PREFIX = environment.storagePrefix;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  isSupport: boolean;
  storage: Storage | { [key: string]: string; };

  constructor(@Inject(PLATFORM_ID) private platformId) {
    if (isPlatformBrowser(this.platformId)) {
      this.isSupport = !!sessionStorage;
      this.storage = sessionStorage || {};
    }
  }

  get<R>(key: string): R {
    if (isPlatformBrowser(this.platformId)) {
      const ret = this.isSupport ? (this.storage as Storage).getItem(`${PREFIX}-${key}`) : this.storage[`${PREFIX}-${key}`];
      return ret ? JSON.parse(ret) : null;
    }
    return null;
  }

  set<T>(key: string, value: T): void {
    if (isPlatformBrowser(this.platformId)) {
      const v = JSON.stringify(value);
      this.isSupport ? (this.storage as Storage).setItem(`${PREFIX}-${key}`, v) : this.storage[`${PREFIX}-${key}`] = v;
    }
  }

  remove(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isSupport ? (this.storage as Storage).removeItem(`${PREFIX}-${key}`) : delete this.storage[`${PREFIX}-${key}`];
    }
  }

  clear(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isSupport ? (this.storage as Storage).clear() : this.storage = {};
    }
  }
}
