import { Injectable } from '@angular/core';
import { CartItem } from './model/CartItem';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  constructor() {
    const cartItem1 = {
      productId: uuidv4(),
      name: 'Cart Item 1',
      price: 10,
    };

    const cartItem2 = {
      productId: uuidv4(),
      name: 'Cart Item 2',
      price: 20,
    };

    const cartItem3 = {
      productId: uuidv4(),
      name: 'Cart Item 3',
      price: 30,
    };

    this.add(cartItem1);
    this.add(cartItem2);
    this.add(cartItem3);
  }

  list(): Observable<CartItem[]> {
    return of(this.items);
  }

  add(item: CartItem) {
    this.items.push(item);
  }

  remove(itemToBeRemoved: CartItem) {
    console.log(itemToBeRemoved.productId);
    this.items = [];
  }
}
