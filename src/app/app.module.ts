import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LanguageService } from './services/language.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { CvComponent } from './cv/cv.component';
import { CvDataService } from './services/dataServices/CvDataService';
import { AuthGuardService } from './user/auth-guard.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { AuthenticationService } from './user/authentication.service';

const appRoutes: Routes = [
  { path: "", redirectTo:'home', pathMatch: 'full'},
  { path: "home", component: HomeComponent},
  { path: "cv", canActivate: [AuthGuardService], component: CvComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},

  { path: "**", component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    FooterComponent,
    CvComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuardService,
    AuthenticationService,
    LanguageService,
    CvDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
