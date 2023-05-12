import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

    submitProduct(data:product){
      return this.http.post<product>("http://localhost:3000/product",data)
    }
    retriveProduct(){
      return this.http.get<product[]>("http://localhost:3000/product");
    }
    deleteProduct(id:number){
      return this.http.delete<product>("http://localhost:3000/product/"+id)
    }
    getData(id:number){
      return this.http.get<product>("http://localhost:3000/product/"+id)
    }
    UpdateProduct(data:product,id:number){
      return this.http.put<product>("http://localhost:3000/product/"+id,data)
    }
}
