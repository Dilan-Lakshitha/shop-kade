import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private router:Router,
              private fb:FormBuilder){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loginProcess(){
    this.router.navigate(['./home']);
  }
  registerClick(){
    this.router.navigate(['./user-signup']);
  }
}
