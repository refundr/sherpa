import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    console.log('product => ', this.product?.productId);
  }

  open(event?: MouseEvent) {
      const modalRef = this.modalService.open(ProductModalComponent, { size: 'lg' });
      modalRef.componentInstance.product = this.product;
  }
}


