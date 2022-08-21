import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MATService } from '../mat.service';

@Component({
  selector: 'app-addquestions',
  templateUrl: './addquestions.component.html',
  styleUrls: ['./addquestions.component.css']
})
export class AddquestionsComponent implements OnInit {

  constructor(private _matservice:MATService , private route: ActivatedRoute,private router: Router,private jwtHelper: JwtHelperService)  {}
  questions:any;
  ngOnInit(): void {
    this.getAllQuestions();
  }
  surveyId=this.route.snapshot.paramMap.get('id');
  logout(){}

  getAllQuestions(){
    this._matservice.getallquestions().subscribe((data: any)=>{
      this.questions = data;
    console.log(data)},
    (error: any) => {
      console.log(error);
    });
  }
  addquestion(questionId:any,answerId:any){
    const data={
      questionId:Number(questionId),
      answerId:Number(answerId),
      surveyId:Number(this.surveyId)
    }
    this._matservice.addquestionstosurvey(data).
    subscribe((data) => {
      console.log(data);
      alert("question added");
      this.ngOnInit();
      },
      error => {
        console.log(error);
      });

  }
  

}
