import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../model/CartItem'

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];

  message: string = "";

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.cartService.list().subscribe((items) => {
      this.items = items;
    });
  }

  onDelete(productId: string) {
    this.cartService.remove(productId)
    this.fetchItems()
  }
}
