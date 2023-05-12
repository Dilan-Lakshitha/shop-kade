import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './usermodel';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http:HttpClient) { }

  sendEmpolyee(Data:User){
    return this.http.post<User>("http://localhost:3000/employee",Data);
  }
 //get method employee details
  retriveEmpolyee(){
    return this.http.get<User[]>("http://localhost:3000/employee");
  }
  //delete employee
  deleteEmpolyee(id:number){
    return this.http.delete<User>("http://localhost:3000/employee/"+id)
  }
  //getting data on edit
  fetchdata(id:number){
  return this.http.get<User>("http://localhost:3000/employee/"+id)
  }
  //update data
  updateEmployee(data:User,id:number){
    return this.http.put<User>("http://localhost:3000/employee/"+id,data)
  }
}