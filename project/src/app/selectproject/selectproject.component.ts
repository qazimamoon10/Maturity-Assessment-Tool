import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MATService } from '../mat.service';

@Component({
  selector: 'app-selectproject',
  templateUrl: './selectproject.component.html',
  styleUrls: ['./selectproject.component.css']
})
export class SelectprojectComponent implements OnInit {


  constructor(private _matservice:MATService , private route: ActivatedRoute,private router: Router,private jwtHelper: JwtHelperService)  {}
  projectlists:any
  userid =this.route.snapshot.paramMap.get('id');
  role=localStorage.getItem("usertype");

  ngOnInit(): void {
    this.projectlist(this.userid);
  }

  projectlist(id: string | null): void {
    this._matservice.getuserbyid(id).subscribe ( (data: any)=>{
      this.projectlists = data;
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
