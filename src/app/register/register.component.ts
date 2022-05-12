import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { regiserterdata } from '../model/registerdata';

@Component({
  selector: 'cd-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onsubmit(Registerform:NgForm){
    console.log(Registerform.value.name);
    const regdata = new regiserterdata(Registerform.value.name,Registerform.value.userName,Registerform.value.passWord);
    console.log(regdata);
    this.userservice.userregistration(regdata);
    this.router.navigate(['/']);
  }

}
