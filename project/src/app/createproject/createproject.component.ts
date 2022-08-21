import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MATService } from '../mat.service';
import{projectdetails}from './projectdetails'



@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

  constructor(private _matservice:MATService ,private router: Router,private jwtHelper: JwtHelperService)  {}
  role=localStorage.getItem("usertype");
  projectlists:projectdetails[]=[];
  createproject:projectdetails={
    projectId: 0,
    projectname: '',
    projectDescription: '',
    functionId: 1
  };


  ngOnInit(): void {
  this.projectlist();

  }
 projectlist(){
  this._matservice.getAllprojects().subscribe ( (data: any)=>{
    this.projectlists = data;
  console.log(data)})
  }

  addproject(): void {
    const data = {
      projectname:this.createproject.projectname,
      projectDescription: this.createproject.projectDescription,
      functionId: 1
    };

    this._matservice.creatproject(data).
    subscribe((data) => {
      console.log(data);
      alert("New Project is been added");
      this.ngOnInit();
      },
      error => {
        console.log(error);
      });
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


