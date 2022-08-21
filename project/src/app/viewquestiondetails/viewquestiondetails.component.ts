import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MATService } from '../mat.service';

@Component({
  selector: 'app-viewquestiondetails',
  templateUrl: './viewquestiondetails.component.html',
  styleUrls: ['./viewquestiondetails.component.css']
})
export class ViewquestiondetailsComponent implements OnInit {

  constructor(private _matservice:MATService , private route: ActivatedRoute,private router: Router)  {}
  questions:any;
  surveydetails:any
  surveyid =this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.questionandanswer(this.surveyid)
  }

  questionandanswer(id: string | null): void {
    this._matservice.getselectedquestionandanswer(id).subscribe ( (data: any)=>{
      this.questions = data;
    console.log(data)})

    }
    
}
