import { Component, OnInit } from '@angular/core';
import { product } from '../productmodel';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
  public productid!:number
  public productData:product={}as product;

  constructor(private productapi:ApiService,
              private activatedRouter:ActivatedRoute,
              private router:Router){}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((param:Params)=>{
      this.productid=param['id']
    })
    this.productapi.getData(this.productid).subscribe((data:product)=>{
      this.productData=data;
      console.log(data)
    })
  }
  UpdateProduct(){
    this.productapi.UpdateProduct(this.productData,this.productid).subscribe((res:product)=>{
      alert("Product Data Updated Successfully")
      this.router.navigate(['/productList'])
    })
  }

}
