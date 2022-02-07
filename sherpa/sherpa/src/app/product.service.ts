import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './model/Product';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private productsUrl =
    'https://submission-api.sandbox.joinsherpa.com/v1/products?key=AIzaSyC0uNcVR1f3dt2UnsaGo0sA3K5LotdwxWw&currency=USD';

  private productsListSource = new BehaviorSubject<Product[]>([]);
  productsList = this.productsListSource.asObservable();

  httpOptions = {
    headers: new HttpHeaders({ affiliateid: 'sherpa' }),
  };

  constructor(private http: HttpClient) {}

  /**
   * @param currency Assuming we are following the iso code standard https://docs.1010data.com/1010dataReferenceManual/DataTypesAndFormats/currencyUnitCodes.html
   * @returns
   */
  fetchProductsByCurrency(currency: string): Observable<Product[]> {
    const urlWithNewCurrency = this.productsUrl.slice(0, -3) + currency;
    return this.http.get<Product[]>(urlWithNewCurrency, this.httpOptions).pipe(
      tap((response) => {
        this.productsListSource.next(response);
      })
    );
  }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl, this.httpOptions).pipe(
      tap((response) => {
        this.productsListSource.next(response);
      })
    );
  }
}
