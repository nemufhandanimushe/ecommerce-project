import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../common/product'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<getResponse>(this.baseUrl).pipe(
      map((response: { _embedded: { products: any; }; }) => response._embedded.products))
  }
}


interface getResponse {

  _embedded: {
    products: Product[];
  }
}
