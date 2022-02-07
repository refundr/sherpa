import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { CartService } from '../cart.service';
import { CartItem } from '../model/CartItem';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private modalService: NgbModal, private cartService: CartService) {}

  ngOnInit(): void {
  }

  open(event?: MouseEvent) {
    const modalRef = this.modalService.open(ProductModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.product = this.product;
  }

  addToCart(event?: MouseEvent) {
    const cartItem: CartItem = {
      productId: this.product?.productId || '',
      name: this.product?.meta.name || '',
      price: this.product?.price.value || 0,
    };

    this.cartService.addToList(cartItem);
    event?.stopPropagation();
  }
}


