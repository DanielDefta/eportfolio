import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eportfolio';

  @Input() public language: string="";

  constructor(private languageService: LanguageService) { }
  ngOnInit() {
    this.languageService.language.subscribe(
      data => {
        this.language = data;
      }
    );
  }

  changeLanguage(lg){
    this.language = lg;
    this.languageService.setLanguage(lg);
  }
}
