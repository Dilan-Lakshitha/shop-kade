import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { User } from '../usermodel';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  data: User[] | undefined;
  constructor(private userapi:UserapiService){

  }
  ngOnInit(): void {
    this.retriveEmployee();
  }




  retriveEmployee() {
    this.userapi.retriveEmpolyee().subscribe(res => {
      this.data = res;
    })
  }
  delete(id: number) {
    this.userapi.deleteEmpolyee(id).subscribe((res => {
      alert("employee deleted succssfully")
      this.retriveEmployee();
    }))
  }  
}
