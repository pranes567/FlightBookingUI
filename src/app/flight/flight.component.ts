import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDetail } from '../model/FlightDetails';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'cd-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  
  tickets: any
  passengers: any
  passengerDetails: boolean = false;
  flight:FlightDetail;
  isadmin = false;
  isuser = false;

  listFlights: FlightDetail[] = [];
  flightlist: any;
  constructor(private flightserv: FlightService,private router:Router) { 
    this.flight = new FlightDetail();
  }

  ngOnInit(): void {
    // this.GetAllflights();
    let checkrole = localStorage.getItem('role');
    if(checkrole==='user')
    {
      this.isuser = true;
      this.isadmin=false;
    }
    else{
      this.isuser = false;
      this.isadmin=true;
    }    

    this.flightserv.GetFlightDetails().subscribe(
      (res:any) => {this.flightlist = res,this.displayFlights(this.flightlist)}
      )
  }

  addflightschedule(){
    this.router.navigate(['addflight']);
  }

  displayFlights(flightlist:any){
    console.log(flightlist)
    this.flightlist = flightlist
    }

  onbookclick(){
    
    this.router.navigate(['booking']);
  }

  onsearchclick(){
    let frmplace = (<HTMLInputElement>document.getElementById("fromplace")).value;
    let toplace = (<HTMLInputElement>document.getElementById("toplace")).value;
    this.flightserv.GetsearchFlightDetails(frmplace,toplace).subscribe(
      (res:any)=> {this.flightlist = res,console.log("outputresult",res),this.displayFlights(this.flightlist)}
    )
  }
  

  //checkflightDetails
  private GetAllflights() {

    let isvaliduser = false;
    this.flightserv.GetFlightDetails().subscribe((data: any) => {
      this.flightlist = data;
      console.log(this.listFlights);
    })
  }


}
