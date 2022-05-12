import { Component, OnInit } from '@angular/core';
import { FlightService } from '../service/flight.service';

@Component({
  selector: 'cd-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  bookhistory:any;
  constructor(private flightserv:FlightService) { }

  ngOnInit(): void {
    this.flightserv.GetBookingHistory().subscribe(
      (res:any) => {this.bookhistory = res, console.log(res),this.displaybookhistory(this.bookhistory)}
      )
  }

  displaybookhistory(data:any){
      this.bookhistory = data;
  }

  onCancelClick(pnr:any){
    this.flightserv.cancelTicket(pnr);
    alert("Ticket has been cancelled");
    this.ngOnInit();
  }

}
