import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signindata } from '../model/signindata';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly Mockeduser = new signindata('johndoe@mail.com','123456') 
  isAuthenticated = false;
  isAdmin = false;
  isUser = false;
  public loggedUser!: any
  constructor(private router:Router) { }

  authenticate(role:any):boolean{
    console.log("entered Authenticate");
    console.log(role);
    if(role==='user'||role==='admin'){
      if(role==='user'){
        this.isUser = true;
        this.isAdmin = false;
        localStorage.setItem('role',role)        
      }
      else{
        this.isAdmin = true;
        this.isUser = false;
      }
      
      this.isAuthenticated=true;
      this.router.navigate(['flight']);
      return true;
    }
    else{
      alert("unAuthorized User");
    }    
    return false; 

  }
  private checkcredentials(signinData:signindata):boolean {
    return this.checkEmail(signinData.getEmail())&&this.checkPassword(signinData.getPassword());
  }

  
  private checkEmail(email:string):boolean {
    return email === this.Mockeduser.getEmail();
  }

  private checkPassword(password:string):boolean {
    return password=== this.Mockeduser.getPassword();

  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
  
}
