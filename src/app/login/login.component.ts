import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  email:string='';
  password:string='';

  constructor(private router:Router,
              private fb:FormBuilder,
              private http:HttpClient){

  }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:new FormControl(this.email),
      password:new FormControl(this.password)
    });
  }

  loginProcess(){
    const formData=this.loginForm.value;
    this.http.post('http://127.0.0.1:9002/user/login',formData).subscribe(
      (resultData:any)=>{
        console.log(resultData);
        this.router.navigate(['./home']);
        alert("user loging successfully");
      },(error)=>{
        console.log(error);
      }
    );

  }
  registerClick(){
    this.router.navigate(['./user-signup']);
  }
}
