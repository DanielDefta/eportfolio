import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public language: string="";
  @Output() public newLanguage = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  changeLanguage(param:string){
    this.newLanguage.emit(param);
  }

}
