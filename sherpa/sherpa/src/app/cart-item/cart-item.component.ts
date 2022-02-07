import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../model/CartItem';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem | undefined;
  @Output('onDelete') onDelete: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  remove() {
    this.onDelete.emit();
  }
}
