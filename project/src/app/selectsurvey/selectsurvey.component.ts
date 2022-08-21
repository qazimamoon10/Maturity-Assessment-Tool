import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MATService } from '../mat.service';

@Component({
  selector: 'app-selectsurvey',
  templateUrl: './selectsurvey.component.html',
  styleUrls: ['./selectsurvey.component.css']
})
export class SelectsurveyComponent implements OnInit {

  constructor(private _matservice:MATService , private route: ActivatedRoute,private router: Router,private jwtHelper: JwtHelperService)  {}
  surveylists:any;
  role=localStorage.getItem("usertype");
  projectid =this.route.snapshot.paramMap.get('id');
  today = "2022-04-22T00:00:00"

  fixedTimezone = this.today;

  ngOnInit(): void {
    this.surveylist(this.projectid);
    console.log(this.today);
  }
  surveylist(id: string | null): void {
    this._matservice.getallsurveydetails(id).subscribe ( (data: any)=>{
      this.surveylists = data;
    console.log(data)})

    }

    isuserAuthenticated() {
      const token: string | null = localStorage.getItem("jwt");
      if (token && !this.jwtHelper.isTokenExpired(token)) {
        return true;
      }
      else {
        return false;
      }
    }
    logout() {
      localStorage.clear();
      this.router.navigate(["login"])
    }

}
