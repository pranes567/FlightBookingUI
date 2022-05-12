import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightBooking';

  // public loggeduser:any;
  constructor(public authenticationservice:AuthenticationService){
    console.log("constructor of app.component hitted");
    this.authenticationservice.loggedUser = localStorage.getItem('lclusername');
  }

  logout(){
    this.authenticationservice.logout();
    localStorage.clear();
  }
}
