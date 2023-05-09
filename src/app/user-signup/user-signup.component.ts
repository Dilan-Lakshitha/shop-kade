import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './user-signup';


function passwordMatcher(c:AbstractControl):{[key:string]:boolean} | null{
  const passwordControl=c.get('password');
  const confirmControl=c.get('confirmPassword');

  if(passwordControl?.pristine||confirmControl?.pristine){
    return null;
  }

  if(passwordControl?.value===confirmControl?.value){
    return null;
  }
  return {'match':true};
}

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit{
  userForm!:FormGroup;
  // user=new User();
  passwordMessage!:string;

  constructor(private router:Router,
              private fb:FormBuilder){}
  
  ngOnInit(): void {
    this.userForm=this.fb.group({
      firstName:['',[Validators.minLength(3)]],
      lastName:['',[Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      passwordGroup:this.fb.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',Validators.required],},{Validators:passwordMatcher}),
      streetaddress:['',[Validators.minLength(5)]],
      city:['',[Validators.required,Validators.compose]],
      region:[''],
      postalcode:['',[Validators.required,Validators.length]]
    })
  }

  cancelProcess(){
    this.router.navigate([''])
  }

  save(){
    this.router.navigate(['./home']);
  }

}
