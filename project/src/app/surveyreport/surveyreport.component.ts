import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-surveyreport',
  templateUrl: './surveyreport.component.html',
  styleUrls: ['./surveyreport.component.css']
})
export class SurveyreportComponent implements OnInit {
  count=Number(this.route.snapshot.paramMap.get('id'))*20;
  role=localStorage.getItem("usertype");

  public salesData: ChartData<'line'> = {
    labels: ['Failure percentage','Success percentage'],
    datasets: [
      { label: 'Successs', data: [100-this.count,this.count], tension: 0.5 },

    ],
  };
  constructor(private route: ActivatedRoute,private router: Router,private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
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
