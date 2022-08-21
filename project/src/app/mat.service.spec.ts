import { TestBed } from '@angular/core/testing';
import{createsurvey} from'src/app/createsurvey/createsurvey';

import { MATService } from './mat.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { toBase64String } from '@angular/compiler/src/output/source_map';

describe('MATService', () => {
  let service: MATService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
    ],
    providers: [
      MATService
    ]
    });
    service = TestBed.get(MATService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('get surveydetails by projectid', () => {


    service.getallsurveydetails(3).subscribe ( data=>{
      expect(data).toBeTruthy();
      //expect(data.projectid).toBe('3');
    })
    const req = httpTestingController.expectOne('http://localhost:22252/api/Surveys/3');
    expect(req.request.method).toEqual("GET");

  });

  it('Post Project details', () => {

    const data = {
      projectname:"Demo Project",
      projectDescription: "Demo Project",
      functionId: 1
    };
    service.creatproject(data).subscribe ( data=>{
      console.log(data);
    })
    const req = httpTestingController.expectOne('http://localhost:22252/api/projects');
    expect(req.request.method).toEqual("POST");

  });





});

