import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from '../login/login.service';
import { UserRole } from '../UserRole';
import { login } from './loginmodel';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  loginForm!:FormGroup;
  email:string='';
  password:string='';

  constructor(private router:Router,
              private fb:FormBuilder,
              private http:HttpClient,
              private userSerive:loginService){

  }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:new FormControl(this.email),
      password:new FormControl(this.password)
    });
  }

  loginProcess():void{
    const formData=this.loginForm.value;
    this.http.get<login[]>('http://localhost:3000/signUP',formData).subscribe(
      (response:any)=>{
        console.log(response);
        const newuser=response.find((user:any)=>{
          console.log(user)
          return user.email===formData.email && user.password===formData.password;
        });
        if(newuser){

        if(response.role==='employee'){
          this.userSerive.setUserRole(UserRole.Employee);
        }else if(response.role==='vendor'){
          this.userSerive.setUserRole(UserRole.Vendor);
        }
        // this.router.navigate(['./home']);
        localStorage.setItem('logindata',JSON.stringify(formData))
      }else{
        alert("Invalid Email or Password")
        this.loginForm.reset();
      }
      },
      (error)=>{
        console.log(error);
      }
    );

  }
  registerClick():void{
    this.router.navigate(['./newsignup']);
  }
}
