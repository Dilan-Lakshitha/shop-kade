import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { vendor } from './loginmodel';



@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  loginForm: FormGroup | any;
  userForm: FormGroup | any;
  email: string = '';
  password: string = '';
  newuser: any;

  constructor(private router: Router,
    private fb: FormBuilder,
    private http: HttpClient) {
    sessionStorage.clear();
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(this.email),
      password: new FormControl(this.password)
    });
  }

  loginProcess() {
    this.http.get<vendor[]>('http://localhost:3000/usersAll').subscribe((response) => {
      //password and email checking 
      const vendor = response.find((any: any) => {
        return any.email === this.loginForm.value.email && any.password === this.loginForm.value.password;
      });
      if (vendor) {
        console.log(vendor.firstName)
        alert("user logging to the dashboard as  " + vendor.role)
        localStorage.setItem('logindata', JSON.stringify(vendor))
        this.router.navigate(['./home'])
      } else {
        alert("Invalid Deatile")
      }
    })
  }
  registerClick(): void {
    this.router.navigate(['./newsignup']);
  }
}
