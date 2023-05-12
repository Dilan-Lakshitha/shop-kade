import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './usermodel';
import { UserapiService } from './userapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  employeeForm!: FormGroup
  isshow = false;
  data: User[] | undefined;


  constructor(private fb: FormBuilder,
              private userapi: UserapiService,
              private router:Router
              ) { }
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeefirstname: [''],
      employeelastname: [''],
      Position: [''],
      nic: [''],
      email: [''],
      country: [''],
      phonenumber: [''],
      dob: [Number],
      id: [Number]
    })
    
  }

  Addemployee() {
    const formData: User = this.employeeForm.value;
    this.userapi.sendEmpolyee(formData).subscribe((res =>
      this.employeeForm.reset()
    ))
    this.router.navigate(['/employeeList'])
  }
}