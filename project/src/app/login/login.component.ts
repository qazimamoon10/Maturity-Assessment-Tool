import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { MATService } from '../mat.service';
import { Createuser } from '../createuser/createuser';
import{login} from './login'

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Currentuser:any;
  regarry:any={
   firstName:"",
   lastName:"",
   userType:"",
   emailid:"",
   password:""
  }
  invalidLogin:boolean;



  constructor(private _matservice:MATService,private router: Router ) { }


  ngOnInit():void {

  }
  getemployee(data:any){

    this._matservice.getempbyuser(data)
    .subscribe(
      data => {
        const userId= (<any>data).userId;
        localStorage.setItem("userId",userId);
       const role = (<any>data).userType;
      localStorage.setItem("usertype", role);
      console.log(role);
      },
      (error: any) => {
        console.log(error);
      })
  }


  login(form: NgForm) {
    const credentials ={
     'emailid': form.value.emailid,
     'password': form.value.password
    }
    this._matservice.login(credentials).
    subscribe(response => {

      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      console.log(token);

      this.invalidLogin = false;

      this.getemployee(credentials);
      const userId =Number(localStorage.getItem("userId"));
      const role=localStorage.getItem("usertype");

      if(role == 'Project Manager')
      {
        this.router.navigate(["createproject"]);
      }
      else if(role == 'Team Member')
      {
       this.router.navigate([`${'SelectprojectComponent'}/${userId}`]);
      }
    }, err => {
      this.invalidLogin = true;
    });
  }



}
