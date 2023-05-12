import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsignup',
  templateUrl: './newsignup.component.html',
  styleUrls: ['./newsignup.component.css']
})
export class NewsignupComponent implements OnInit{
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
      postalcode:[''],
      role:"vendor"
    })
  }

  cancelProcess(){
    this.router.navigate([''])
  }

//   userRegister(formData:any){
//   this.http.post('http://127.0.0.1:9002/user/create',formData).subscribe(
//     (resultData:any)=>{console.log(resultData);
//     alert("user registerted successfully")}
//   )
// }

save(){
  const formData = this.userForm.value;
  this.http.post("http://localhost:3000/signUP",formData).subscribe(response=>{
    console.log(response)
    alert("User Registered Successfully");
    this.formData.reset()
  });
  this.router.navigate(['']);
}
}
