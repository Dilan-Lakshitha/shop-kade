import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './home/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

    submitProduct(data:product){
      return this.http.post<product>("http://localhost:3000/posts",data)
    }
    retriveProduct(){
      return this.http.get<product[]>("http://localhost:3000/posts");
    }
}
