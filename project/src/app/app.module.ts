import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MATService } from './mat.service';
import { CreateprojectComponent } from './createproject/createproject.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { ViewquestiondetailsComponent } from './viewquestiondetails/viewquestiondetails.component';
import { SelectprojectComponent } from './selectproject/selectproject.component';
import { SelectsurveyComponent } from './selectsurvey/selectsurvey.component';
import { SurveypageComponent } from './surveypage/surveypage.component';
import { NgChartsModule } from 'ng2-charts';
import { SurveyreportComponent } from './surveyreport/surveyreport.component';




export function tokenGetter() {
  return localStorage.getItem("jwt");
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateuserComponent,
    HomeComponent,
    CreateprojectComponent,
    CreatesurveyComponent,
    AddquestionsComponent,
    ViewquestiondetailsComponent,
    SelectprojectComponent,
    SelectsurveyComponent,
    SurveypageComponent,
    SurveyreportComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot (),
    BrowserAnimationsModule,
    NgChartsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains:["localhost:4200"],
        disallowedRoutes:[]
      }
    })



  ],
  providers: [
    MATService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
