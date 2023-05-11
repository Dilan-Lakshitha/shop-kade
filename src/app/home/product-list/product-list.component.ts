import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { product } from '../productmodel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  data:undefined| product[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.retriveProduct();
  }

  retriveProduct(){

    this.api.retriveProduct().subscribe(res=>{
      this.data=res
      console.log(res)
      console.log("product")
    });
  }
}
