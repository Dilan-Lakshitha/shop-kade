import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/home/product-Manage/api.service';
import { product } from '../productmodel';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  ProductForm:FormGroup|any;

  constructor(private fb:FormBuilder,
              private http:HttpClient,
              private api:ApiService ){
}
  ngOnInit(): void {
    this.ProductForm=this.fb.group({
      productname:[''],
      description:[''],
      productbrand:[''],
      email:[''],
      country:[''],
      phonenumber:[''],
      id:[Number]

    })
  }
  AddProduct(){
    const formData:product=this.ProductForm.value;
    this.api.submitProduct(formData).subscribe((res=>{
      this.ProductForm.reset();
      alert("Product added succesfully")
    }))
  }
}
