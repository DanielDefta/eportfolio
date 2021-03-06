import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { slideRightLeftAnimation } from '../_animations/slide_right_left.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] //,

  // animations:[slideRightLeftAnimation],
    
  //       host: { '[@slideRightLeftAnimation]':''}
})
export class HomeComponent implements OnInit {

  @Input() language: string="";

  constructor(private languageService: LanguageService) { 
  }

  ngOnInit(){
    this.languageService.language.subscribe(
      data => {
        this.language = data;
      }
    );
  }
}
