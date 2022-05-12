import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { signindata } from '../model/signindata'
import { FlightDetail } from '../model/FlightDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl:string;
  url:any;
  constructor(private http: HttpClient) {
    //this.baseurl = "http://localhost:26171/Registration/login";
    this.baseurl = "http://localhost:26171/";
   }
   httpHeader = {
     Headers:new HttpHeaders({
      'content-type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'responseType': 'text'      
     })

   }


  getlogindata(): Observable<any> {
    let loginurl = "http://localhost:26171/Registration/login";
    return this.http.get(loginurl);
  }

  userlogin(data:any): Observable<any> {
    // let params1 = new HttpParams().set('username',username)
    //                               .set('password',pass);    
    this.url = this.baseurl +"Registration/login";   
    
    console.log(this.url);
    // return this.http.post(this.url,{params:params1});  
    return this.http.post(this.url,data,{responseType:'text'});  
  }

  userregistration(data:any)
  {
    return this.http.post(this.baseurl+"Registration/register",data,{responseType:'text'} ).subscribe((result)=>{
      alert("User Registered Successfully");
    })
  }
  

}
