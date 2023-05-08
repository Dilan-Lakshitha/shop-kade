import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit{

  constructor(private router:Router){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  cancelProcess(){

  }

  Register(){

  }

}
