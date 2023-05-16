import { Component, OnInit } from '@angular/core';
import { vendor } from '../newlogin/loginmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loginguser:vendor=new vendor();
ngOnInit(): void {
  const logindata= localStorage.getItem('logindata');
  if(logindata){
    const vendor=JSON.parse(logindata);
    this.loginguser=vendor;
  }
}
}