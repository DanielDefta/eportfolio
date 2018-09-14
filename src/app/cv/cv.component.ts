import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { slideRightLeftAnimation } from '../_animations/slide_right_left.animation';
import { CV } from '../models/cv';
import { CvDataService } from '../services/dataServices/CvDataService';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']//,
  
  // animations:[slideRightLeftAnimation],
  //  
  //      host: { '[@slideRightLeftAnimation]':''}
})
export class CvComponent implements OnInit {
  language: string="";

  private cv:CV = new CV();

  constructor(private languageService: LanguageService) { 
  }

  ngOnInit() {
    this.languageService.language.subscribe(
      data => {
        console.log(data);
        this.language = data;
      }
    );
  }
  
}