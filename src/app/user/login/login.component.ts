import { AuthenticationService } from '../authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language.service';


function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    console.log(control.value);
    return control.value.length < 12 ? { 'passwordTooShort': { value: control.value.length } } : null;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public language: string="";
  public user: FormGroup;
  public errorMsg: string;

  constructor(private languageService: LanguageService, private authService: AuthenticationService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.language = this.languageService.getLanguage();
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.authService.login(this.user.value.username, this.user.value.password).subscribe(
      val => {
        console.log(val);
        if (val) {
          console.log(val);
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
            this.authService.redirectUrl = undefined;
          } else {
            this.router.navigate(['/home']);
          }
        }
      }, 
      err => this.errorMsg = err.json().message);
  }

  changeLanguage(lg){
    console.log(lg);
    this.language = lg;
    this.languageService.savelanguage(lg);
  }
}
