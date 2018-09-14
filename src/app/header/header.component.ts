import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public language: string="";
  @Output() public newLanguage = new EventEmitter<string>();
  constructor(private languageService:LanguageService) { }

  ngOnInit() {
    this.languageService.language.subscribe(
      data => {
        this.language = data;
      }
    );
  }

  changeLanguage(param:string){
    this.newLanguage.emit(param);
  }

}
