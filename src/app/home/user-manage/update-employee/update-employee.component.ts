import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/newlogin/loginmodel';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  public employeeid!:number
  public employeedata: User = {} as User;

  constructor(private userapi:UserapiService,
              private activatedroute:ActivatedRoute,
              private router:Router){}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((param:Params)=>{
    this.employeeid=param['id']
    })
    this.userapi.fetchdata(this.employeeid).subscribe((data:User)=>{
      this.employeedata=data;
      console.log(data)
    })
  }
  
  Updatemployee(){
    this.userapi.updateEmployee(this.employeedata,this.employeeid).subscribe((res:User)=>{
      alert("Data updated successfully!!")
      this.router.navigate(['/employeeList'])
    })
  }

}
