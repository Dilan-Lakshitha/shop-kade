import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
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

    })
  }
  AddProduct(){
    console.log(this.ProductForm.value)
    const formData:product=this.ProductForm.value;
    this.api.submitProduct(formData).subscribe((res=>{
      this.ProductForm.reset();
    }))
  }
}
