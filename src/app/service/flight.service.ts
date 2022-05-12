import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BookFlightDetail } from '../model/bookflightDetail';
import { FlightDetail } from '../model/FlightDetails';


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  baseurl: string;
  url: any;
  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:26171/";
  }

  httpHeader = {
    Headers: new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    })

    // httpheader = {
    //   headers: new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    //   })
    //   }

  }

  GetFlightDetails(): Observable<any> {

    this.url = this.baseurl + "Airline/GetallFlight";
    console.log(this.url);
    return this.http.get(this.url);

  }

  GetsearchFlightDetails(frmplace:string,toplace:string): Observable<any> {
    this.url = this.baseurl+"Airline/SearchFlight?frmplace="+frmplace+"&toplace="+toplace;
    console.log(this.url);
    return this.http.get(this.url);
  }

  GetBookingHistory(): Observable<any> {

    this.url = this.baseurl + "Airline/AllTicket";
    console.log(this.url);
    return this.http.get(this.url);

  }

  GetCouponbyCode(couponcode:string): Observable<any> {

    this.url = this.baseurl + "api/Airline/GetDiscountCoupon?coupon="+couponcode;
    console.log(this.url);
    return this.http.get(this.url);

  }

  // AddFlights(newflight:FlightDetail):Observable<any>{         

  //   this.url = this.baseurl+"Airline/Inventory";
  //   console.log(this.url);
  //   return this.http.post(this.url,JSON.stringify(FlightDetail));

  // }

  addflighttry(data: any) {
    return this.http.post(this.baseurl + "Airline/Inventory", data).subscribe((result) => {
      console.warn("result", result);

    })
  }

  addCoupon(data: any) {
    return this.http.post(this.baseurl + "api/Airline/AddDiscoundCoupon", data).subscribe((result) => {
      console.log(this.baseurl + "/api/Airline/AddDiscoundCoupon"); 
      console.warn("result", result);
    })
  }


  getallCoupon(): Observable<any> {
    this.url = this.baseurl + "api/Airline/GetAllDiscountCoupon"
    return this.http.get(this.url);
    console.log(this.url);
  }

  bookflightserv(data: any) {
    console.warn("MethodinService", data);
    return this.http.post(this.baseurl + "api/Airline/bookflight", data,{responseType:'text'}).subscribe((result) => {
      console.warn("result", result);

    })
  }

  cancelTicket(pnr:any)
  {
    return this.http.put(this.baseurl+"Airline/Cancel?pnr="+pnr,null).subscribe((result)=>{
      alert(result);
    })
  }

  

}

