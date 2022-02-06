import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './model/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({ affiliateid: 'sherpa' }),
  };

  private productsUrl =
    'https://submission-api.sandbox.joinsherpa.com/v1/products?key=AIzaSyC0uNcVR1f3dt2UnsaGo0sA3K5LotdwxWw&currency=EUR&language=en';
  private productUrl =
    'https://submission-api.sandbox.joinsherpa.com/v1/products/USA_ESTA?key=AIzaSyC0uNcVR1f3dt2UnsaGo0sA3K5LotdwxWw&currency=EUR&language=en';

  constructor(private http: HttpClient) {}

  // getProducts(): Observable<Product[]> {
  //   const products = of(PRODUCTS);
  //   return products;
  // }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl, this.httpOptions);
  }

  fetchSingleProduct(): Observable<Product> {
    return this.http.get<Product>(this.productUrl, this.httpOptions);
  }
}
