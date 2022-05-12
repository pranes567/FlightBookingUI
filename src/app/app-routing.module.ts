import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import  {FlightComponent} from './flight/flight.component';
import { BookingComponent } from './booking/booking.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import {DicountcouponComponent}from './dicountcoupon/dicountcoupon.component';
import { DiscountListComponent } from './discount-list/discount-list.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path:'flight',component: FlightComponent,canActivate:[AuthGuard]},
  {path:'addflight',component:AddFlightComponent,canActivate:[AuthGuard]},
  {path:'booking',component:BookingComponent,canActivate:[AuthGuard]}, 
  {path:'AddDiscount',component:DicountcouponComponent,canActivate:[AuthGuard]},
  {path:'DiscoundManage',component:DiscountListComponent,canActivate:[AuthGuard]},
  {path:'BookHistory',component:BookingHistoryComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent}, 
  {path: '',component:LogInComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
