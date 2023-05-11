import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class HomeService {
 private ProductsUrl = "";

 constructor(private http:HttpClient){
 }

//  getProducts():Observable<Product[]>{

//  }
//  getProduct(id : number):Observable<Product>{

// }
// createProduct(product :Product):Observable<Product>{

// }
// deleteProduct(id:number):Observable<Product>{

// }
// updateProduct(product: Product):Observable{

// }

}