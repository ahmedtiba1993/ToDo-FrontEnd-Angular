import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationRequest } from 'src/gs-api/src/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticationRequest:AuthenticationRequest={};
  errorMessage ="";
  email : any


  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit() {
    if(localStorage.getItem("accessToken")){
      this.router.navigate(['']);
    }
  }


  login(){
    this.userService.login(this.authenticationRequest).subscribe((data)=>{
      this.userService.setAccessToken(data);
      this.getUserByEmail(); 
      this.router.navigate(['']);
    },  error =>{
      this.errorMessage=error.error.message;
    });;
  }

  getUserByEmail():void{
    this.userService.getUserByEmail(this.authenticationRequest.login!)
       .subscribe(user =>{
        this.userService.setConnectedUser(user)
       });
   }
}
