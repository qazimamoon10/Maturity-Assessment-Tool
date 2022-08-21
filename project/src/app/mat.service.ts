import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MATService {
  webapiurl : string = 'http://localhost:22252/api/Users';
  webapiurl2 : string = 'http://localhost:22252/api/users/login';
  webapiurl3 : string = 'http://localhost:22252/api/users/getusertype';



  headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private _client: HttpClient) { }

 getuser(){
  return this._client.get(this.webapiurl).pipe(catchError(this.handleError));
 }

  create(data: any): Observable<any> {
    console.log(data);
    return this._client.post(this.webapiurl,data).pipe(
      catchError(this.handleError));

  }

  login(formData:any): Observable<any>  {
    console.log(formData);
    return this._client.post(this.webapiurl2,formData);
  }
  getempbyuser(formData:any): Observable<any> {
    console.log(formData);
    return this._client.post(this.webapiurl3,formData);
  }


  getAllprojects(){
    return this._client.get('http://localhost:22252/api/projects').pipe(catchError(this.handleError));
  }


  creatproject(data: any): Observable<any> {
    console.log(data);
    return this._client.post('http://localhost:22252/api/projects',data).pipe(
      catchError(this.handleError));

  }

  getAllprojectmembers(){
    return this._client.get('http://localhost:22252/api/ProjectMembers').pipe(catchError(this.handleError));
  }

  getprojectdetailsbyid(id: any): Observable<any> {
    return this._client.get(`${'http://localhost:22252/api/projects'}/${id}`).pipe(
      catchError(this.handleError)
    );

  }

  addmemberstotheproject(data: any): Observable<any> {
    console.log(data);
    return this._client.post('http://localhost:22252/api/ProjectMembers',data).pipe(
      catchError(this.handleError));

  }

  getprojectmemberbyid(id: any): Observable<any> {
    return this._client.get(`${'http://localhost:22252/api/ProjectMembers'}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

getallsurveydetails(id: any): Observable<any>{
  return this._client.get(`${'http://localhost:22252/api/Surveys'}/${id}`).pipe(catchError(this.handleError));
}
createsurvey(data: any): Observable<any> {
  console.log(data);
  return this._client.post('http://localhost:22252/api/Surveys',data).pipe(catchError(this.handleError));

}

getallquestions(){
  return this._client.get('http://localhost:22252/api/Answers').pipe(catchError(this.handleError));
}

addquestionstosurvey(data: any): Observable<any> {
  console.log(data);
  return this._client.post('http://localhost:22252/api/UserSurveys',data).pipe(catchError(this.handleError));

}
getselectedquestionandanswer(id:any){
  return this._client.get(`${'http://localhost:22252/api/UserSurveys'}/${id}`).pipe(catchError(this.handleError));
}


//team member side

getuserbyid(id:any){
  return this._client.get(`${'http://localhost:22252/api/Users'}/${id}`).pipe(catchError(this.handleError));
}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
