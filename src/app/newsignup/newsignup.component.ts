import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, vendor } from '../newlogin/loginmodel';

@Component({
  selector: 'app-newsignup',
  templateUrl:'./newsignup.component.html',
  styleUrls: ['./newsignup.component.css']
})
export class NewsignupComponent implements OnInit{
  userForm:FormGroup|any;

  constructor(private router:Router,
              private fb:FormBuilder,
              private http:HttpClient){}
  
  ngOnInit(): void {
    this.userForm=this.fb.group({
      
      firstName:[''],
      lastName: [''],
      email: [''],
      password: [''],
      country: [''],
      phonenumber: [''],
      dob: [Number],
      role: ['']
    })
  }

  cancelProcess(){
    this.router.navigate([''])
  }

  save(){
    this.http.post<vendor>('http://localhost:3000/usersAll',this.userForm.value).subscribe((response) => {
      console.log(response)
      alert("Vendor Registered Successfully");
      // this.router.navigate(['']);
    });
    alert("Please Entered a valid Data")
  }
}
