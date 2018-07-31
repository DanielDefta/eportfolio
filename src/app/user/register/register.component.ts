import { AuthenticationService } from '../authentication.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from "rxjs/operators";
import { LanguageService } from '../../services/language.service';


function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function usernameValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'usernameTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() public language: string="";
  public user: FormGroup;

  get passwordControl(): FormControl {
    return <FormControl>this.user.get('passwordGroup').get('password');
  }

  constructor(private languageService: LanguageService, private authenticationService: AuthenticationService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.language = this.languageService.getLanguage();
    this.user = this.fb.group({
      username: ['', [Validators.required, usernameValidator(4)], this.serverSideValidateUsername()],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(12)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords })
    });
  }

  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.authenticationService.checkUserNameAvailability(control.value).pipe(map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      }))
    };
  }

  onSubmit() {
    this.authenticationService.register(this.user.value.username, this.passwordControl.value).subscribe(val => {
      if (val) {
        this.router.navigate(['/home']);
      }
    });
  }

  changeLanguage(lg){
    console.log(lg);
    this.language = lg;
    this.languageService.savelanguage(lg);
  }
}

