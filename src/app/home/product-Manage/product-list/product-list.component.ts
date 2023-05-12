import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/home/product-Manage/api.service';
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
  delete(id: number) {
    this.api.deleteProduct(id).subscribe((res => {
      alert("employee deleted succssfully")
      this.retriveProduct();
    }))
  } 
}
