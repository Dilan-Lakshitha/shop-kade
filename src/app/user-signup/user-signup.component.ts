import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit{
  userForm!:FormGroup;
  passwordMessage!:string;
  formData:any={};

  constructor(private router:Router,
              private fb:FormBuilder,
              private http:HttpClient){}
  
  ngOnInit(): void {
    this.userForm=this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      // passwordGroup:this.fb.group({
      password:[''],
      // confirmPassword:['',Validators.required],},{Validators:passwordMatcher}),
      streetaddress:[''],
      city:[''],
      region:[''],
      postalcode:['']
    })
  }

  cancelProcess(){
    this.router.navigate([''])
  }

  userRegister(formData:any){
  this.http.post('http://127.0.0.1:9002/user/create',this.formData).subscribe(
    (resultData:any)=>{console.log(resultData);
    alert("user registerted successfully")}
  )
}

save(){
  const formData = this.userForm.value;
  this.userRegister(formData);
  this.router.navigate(['']);
}
}
