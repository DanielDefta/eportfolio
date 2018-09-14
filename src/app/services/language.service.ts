import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable()
export class LanguageService {

  private languageSource = new BehaviorSubject(null);
  language = this.languageSource.asObservable();

  constructor() { 
    if(localStorage.getItem("lg"))
    {
      this.setLanguage(localStorage.getItem("lg"));
    }
    else {
      this.setLanguage('NL');
    }
  }

  setLanguage(language:string){
    localStorage.setItem("lg",language);
    this.languageSource.next(language);
  }
}
