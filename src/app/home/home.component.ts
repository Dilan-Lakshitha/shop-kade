import { Component, OnInit } from '@angular/core';
import { vendor } from '../newlogin/loginmodel';
import { product } from './product-Manage/productmodel';
import { ApiService } from './product-Manage/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:undefined | product[]
  loginguser: vendor = new vendor();

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    const logindata = localStorage.getItem('logindata');
    if (logindata) {
      const vendor = JSON.parse(logindata);
      this.loginguser = vendor;
    }
    this.retriveProduct();
  }

  retriveProduct() {
    this.api.retriveProduct().subscribe(res => {
      this.data = res
      console.log(res)
    });
  }
}