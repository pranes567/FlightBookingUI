import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from'@angular/common/http';
import { FlightComponent } from './flight/flight.component';
import { BookingComponent } from './booking/booking.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { DicountcouponComponent } from './dicountcoupon/dicountcoupon.component';
import { DiscountListComponent } from './discount-list/discount-list.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    FlightComponent,
    BookingComponent,
    AddFlightComponent,
    DicountcouponComponent,
    DiscountListComponent,
    BookingHistoryComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
