import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../service/flight.service';
import { DiscountDetail } from '../model/DiscountDetails';

@Component({
  selector: 'cd-dicountcoupon',
  templateUrl: './dicountcoupon.component.html',
  styleUrls: ['./dicountcoupon.component.scss']
})
export class DicountcouponComponent implements OnInit {

  constructor(private FlightSer: FlightService,private router:Router) { }

  ngOnInit(): void {
  }

  AddDiscountcoupon(data:any)
  {
    this.FlightSer.addCoupon(data);
    console.warn(data);   
    alert("Flight Added Successfully");    
    this.router.navigate(['DiscoundManage']);
    
  }

}
