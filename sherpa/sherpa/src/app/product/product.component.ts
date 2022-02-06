import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import Swal from 'sweetalert2';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('product => ', this.product?.productId);
  }

  onClick(event?: MouseEvent) {
    Swal.fire(this.product?.meta.name, this.product?.meta.text);
  }
}
