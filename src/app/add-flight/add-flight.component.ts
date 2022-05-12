import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightDetail } from '../model/FlightDetails';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'cd-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {
  isFormInvalid:any;
  newflight:any;
  opost:any;
  constructor(private flightser:FlightService,private router:Router) {
    
   }

  ngOnInit(): void {
    
  }

  onsubmit(addflightform:NgForm)
  {
    if(!addflightform.valid){
      this.isFormInvalid = true;      
      return;
    }
    this.addFlighttoDB(addflightform);
  }

  addFlighttoDB(addflightform:NgForm)
  {
    this.newflight=new FlightDetail();
    this.newflight.flightNumber = addflightform.value.flightno;
    this.newflight.airline = addflightform.value.airlinename;
    this.newflight.fromPlaceName = addflightform.value.fromplace;
    this.newflight.toPlaceName = addflightform.value.toplace;
    this.newflight.flightStartDateTime= addflightform.value.fromdate;
    this.newflight.flightToDateTime = addflightform.value.todate;
    this.newflight.totalBusinessSeats = addflightform.value.Bu_noofseats;
    this.newflight.totalNonBusinessSeats = addflightform.value.NBu_noofseats;
    this.newflight.ticketCost = addflightform.value.ticketcost;

    // this.flightser.AddFlights(this.newflight).subscribe(
    //   (data:any)=>{this.opost=data;
    //                 console.log(this.opost) });
      
  }

  addflightry(data:any){
    this.flightser.addflighttry(data);
    console.warn(data);   
    alert("Flight Added Successfully");    
    this.router.navigate(['flight']);
  }

}
