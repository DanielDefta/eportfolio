import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable()
export class AuthenticationService {
  private _url = '/API/users';
  private _user$: BehaviorSubject<string>;

  public redirectUrl: string;

  constructor(private http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(currentUser && currentUser.username);
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    const localCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    return !!localCurrentUser ? localCurrentUser.token  : '';
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`, {username: username, password: password })
    .pipe(map(res => {
      const token = res.json().token;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
    }));
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }

  register(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/register`, { username: username, password: password })
    .pipe(map(res => {
      const token = res.json().token;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
    }));
  }

  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkusername`, { username: username })
    .pipe(map(res => {
      const item = res.json();
      if (item.username === 'alreadyexists') {
            return false;
          } else {
            return true;
          }
    }));
  }
}