import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/home/product-Manage/api.service';
import { product } from '../productmodel';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  ProductForm:FormGroup|any;
  selectedFile: File| any;

  constructor(private fb:FormBuilder,
              private http:HttpClient,
              private api:ApiService ){
}
  ngOnInit(): void {
    this.ProductForm=this.fb.group({
      productname:[''],
      description:[''],
      productbrand:[''],
      productprice:[Number],
      currency:[''],
      email:[''],
      country:[''],
      phonenumber:[''],
      id:[Number],
      photourl:['']

    })
  }

  onFileSelected(event:any){
   const files:FileList= event.target.files;
   if(files && files.length>0){
    this.selectedFile=files[0];
    this.convertFileToBase64(this.selectedFile);
   }
  }

  convertFileToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      console.log(base64String); // Base64 string representation of the file
    };
    reader.onerror = (error) => {
      console.error('Error converting file to Base64:', error);
    };
  }

  uploadFile(){
      if (!this.selectedFile) {
        console.log('No file selected.');
        return;
      }
    const formData:FormData=new FormData();
    formData.append('file',this.selectedFile,this.selectedFile.name);

    this.http.post("http://localhost:3000/product",formData).subscribe(response=>{
      console.log(response);
      alert("File upload Successfully");
  },error=>{
    console.log(error)
    alert("Error Uploading File");
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
