import { Injectable } from '@angular/core';
import { CartItem } from './model/CartItem';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartItem[] = [];

  private itemsSource = new BehaviorSubject<CartItem[]>(this.items);
  currentMessage = this.itemsSource.asObservable();

  addToList(item: CartItem) {
    this.items.push(item);
    this.itemsSource.next(this.items);
  }

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

  add(item: CartItem) {
    this.items.push(item);
  }

  list(): Observable<CartItem[]> {
    return of(this.items);
  }

  remove(itemToBeRemoved: string) {
    this.items = this.items.filter((item) => item.productId !== itemToBeRemoved);
    this.itemsSource.next(this.items);
  }
}
