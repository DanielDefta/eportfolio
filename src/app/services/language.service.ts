import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

  constructor() { }

  savelanguage(language:string){
    localStorage.setItem("lg", language);
  }

  getLanguage(): string{
    if(localStorage.getItem("lg") === null || localStorage.getItem("lg") === ""){
      localStorage.setItem("lg",'NL');
    }
    return localStorage.getItem("lg");
  }
}
