import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../product.service';
import * as _ from 'lodash';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.fetchProducts().subscribe((products) => {
      this.products = products;
    });
  }

  // fetchProductsByChunkSize(chunkSize: number): void {
  //   this.productService.fetchProducts().subscribe((products) => {
  //     this.products = _.chunk(products, chunkSize);
  //   });
  // }

  // getProduct(): void {
  //   this.productService.fetchSingleProduct().subscribe((product) => {
  //     this.products.push(product);
  //   });
  // }
}
