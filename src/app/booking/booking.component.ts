import { Component, OnInit } from '@angular/core';
import { FlightService } from '../service/flight.service';
import { Router } from '@angular/router';
import { BookFlightDetail } from '../model/bookflightDetail';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cd-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  iscouponapplied:any=false;
  discountid:any;
  bookflightdetail:any;
  newbookflightdetail:any;
  jsoncheckobject:any;
  constructor(private flightserv:FlightService,private router:Router) { }

  ngOnInit(): void {
  }

  onChange() {
    this.iscouponapplied = true;
  }

  BookFlight(bookticket:any){
    let username = localStorage.getItem('lclusername');
    console.log("BeforeAdding",bookticket);
    console.log("flightnumbercheck",bookticket.flightNumber);
    this.bookflightdetail = new BookFlightDetail(bookticket.flightNumber,username,2,bookticket.FromPlaceName,bookticket.ToPlaceName,bookticket.FlightStartDateTime,bookticket.FlightToDateTime,bookticket.No_of_Seats,bookticket.TicketCost,1,bookticket.flightSeatNo);
    let jsoncheckobject = JSON.parse(JSON.stringify( this.bookflightdetail));
    console.log("ContructorPassedobject",this.bookflightdetail);
    console.log("jsonobjectchek",jsoncheckobject);

    this.flightserv.bookflightserv(jsoncheckobject);
    alert("Ticket has been booked successfully");
    this.router.navigate(['BookHistory']);  

  }

  Getcoupon(code:string){
     
    this.flightserv.GetCouponbyCode(code).subscribe(
      (res:any) => {this.discountid = res.DiscountCouponID,this.assigndiscountvalue(this.discountid),console.log("ResultCheck",this.bookflightdetail)
                      this.bookflightdetail.discountCouponID = res.DiscountCouponID,console.warn("resdiscountid"),console.warn("resultfordatapass",res),
                     this.router.navigate(['BookHistory']);
                     
        }
      )

      
  }

  assigndiscountvalue(value:string){
    this.discountid = value;
  }

  

  

}
