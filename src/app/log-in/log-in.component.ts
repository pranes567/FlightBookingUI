import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signindata } from '../model/signindata';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { FlightDetail } from '../model/FlightDetails';


@Component({
  selector: 'cd-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,private userservice:UserService) {
    
  }

 
   
  ngOnInit(): void {
  }
  isFormInvalid = false;
  areCredentialsInvalid = false;
  role:any;
  onsubmit(signInForm:NgForm)
  {
    if(!signInForm.valid){
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkcredentials(signInForm);
  }
  //Hard coded user
  // private checkcredentials(signInForm:NgForm) {
  //   const signinData = new signindata(signInForm.value.email,signInForm.value.password);
  //   localStorage.setItem('lclusername',signInForm.value.email );
  //   console.log(localStorage.getItem('lclusername'));
  //   let checkrole:string='admin'    
  //   if(!this.authenticationService.authenticate(checkrole)){
  //     this.isFormInvalid = false;
  //     this.areCredentialsInvalid = true;
  //   }
    
  // }

  //DatabaseUser
  private checkcredentials(signInForm:NgForm) {
    console.log("Entered Check Credentials")
    const signinData = new signindata(signInForm.value.email,signInForm.value.password);
    localStorage.setItem('lclusername',signInForm.value.email );
    console.log(localStorage.getItem('lclusername'));
    this.authenticationService.loggedUser = localStorage.getItem('lclusername')
    let username:String = signInForm.value.email;
    let password:String = signInForm.value.password;   
     
    // this.userservice.userlogin(signInForm.value.email,signInForm.value.password).subscribe(data=>
    //   {
    //     console.log(data);
    //     this.role = JSON.stringify(data);
    //     console.log(this.role);
    //   })
    this.userservice.userlogin(signinData).subscribe(data=>
      {
        console.log(signinData);        
        this.role = data;
        if(this.authenticationService.authenticate(this.role)){
          this.isFormInvalid = false;
          this.areCredentialsInvalid = true;
        }        
      })
      console.log("aftermethodcheck",this.role);           
    
  }

  assignrolevariable(roledata:any){    
    this.role = roledata;
  }

  //checkflightDetails
  // private checkcredentials(signInForm:NgForm) {
    
  //   let  isvaliduser = false; 
  //   this.userservice.GetFlightDetails().subscribe(data=>
  //     {
  //       this.listFlights = data;
  //     })
  //     console.log(this.listFlights);   
    
  // }

}
