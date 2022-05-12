import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../service/flight.service';
import { FlightDetail } from '../model/FlightDetails';

@Component({
  selector: 'cd-discount-list',
  templateUrl: './discount-list.component.html',
  styleUrls: ['./discount-list.component.scss']
})
export class DiscountListComponent implements OnInit {

  DiscountDetail:any;
  isadmin = false;
  isuser = false;
  constructor(private flightserv:FlightService,private router:Router) { }

  
  ngOnInit(): void {
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
    this.flightserv.getallCoupon().subscribe(
      (res:any) => {this.DiscountDetail = res,this.displaycoupon(this.DiscountDetail)}
      )

  }

  displaycoupon(couponlist:any){
    console.log(couponlist)
    this.DiscountDetail = couponlist
    }

  addcoupon(){
    
    this.router.navigate(['AddDiscount'])
  }

}
