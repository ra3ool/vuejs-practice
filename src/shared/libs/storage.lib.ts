import type { Storage } from '@shared/types';
import Cookies from 'js-cookie';

export class LocalStorage implements Storage {
  get(key: string) {
    return localStorage.getItem(key);
  }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}

export class SessionStorage implements Storage {
  get(key: string) {
    return sessionStorage.getItem(key);
  }

  set(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}

export class CookieStorage implements Storage {
  get(key: string) {
    return Cookies.get(key) ?? null;
  }

  set(key: string, value: string, options?: object) {
    Cookies.set(key, value, options);
  }

  remove(key: string) {
    Cookies.remove(key);
  }
}

const storageMap: Record<string, Storage> = {
  localStorage: new LocalStorage(),
  sessionStorage: new SessionStorage(),
  cookieStorage: new CookieStorage(),
};

export class StorageFactory {
  static createStrategy(key: string): Storage {
    const strategy = storageMap[key];
    if (!strategy) throw new Error(`Unknown Storage Strategy Key: ${key}`);
    return strategy;
  }
}
