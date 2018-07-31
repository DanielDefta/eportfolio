import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { CV } from '../../models/cv';
import { AuthenticationService } from '../../user/authentication.service';

@Injectable()
export class CvDataService {
  private _appUrl = 'http://localhost:4200/API/cv/';
  
  constructor(private http: Http, private auth: AuthenticationService) {
  }

  get cv() {
    return this.http.get(this._appUrl, {headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) });
  }

  setCv(cv: CV) {
    console.log(cv);
    return this.http.post(this._appUrl, cv);
  }
}