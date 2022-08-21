import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { MATService } from '../mat.service';
import{Createuser} from './createuser'


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  regarry={
    firstName: '',
    lastName: '',
    userType: '',
    emailid: '',
    password: '',
    cnfpassword:''

  }

  ngForm:any;

  ngSelect = 1;
  passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  emailpattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"




  constructor(private _matservice:MATService,private router: Router ) { }

  ngOnInit(): void {
  }
  addemp(): void {

    const data={
      firstName:this.regarry.firstName,
    lastName:this.regarry.lastName,
    userType:this.regarry.userType,
    emailid: this.regarry.emailid,
    password:this.regarry.password
    }

    this._matservice.create(data).
    subscribe((data) => {
      console.log(data);
      alert("New User Created");
      this.router.navigate(["login"]);

      },
      error => {
        console.log(error);
      });
  }
}
