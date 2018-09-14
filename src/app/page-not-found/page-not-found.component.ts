import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { slideRightLeftAnimation } from '../_animations/slide_right_left.animation';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']//,

  //animations:[slideRightLeftAnimation],
  // 
  //      host: { '[@slideRightLeftAnimation]':''}
})
export class PageNotFoundComponent implements OnInit {
  language: string="";

  constructor(private languageService: LanguageService) { 

  }

  ngOnInit() {
    this.languageService.language.subscribe(
      data => {
        this.language = data;
      }
    );
  }

  

}
