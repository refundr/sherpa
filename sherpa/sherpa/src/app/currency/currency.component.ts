import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';



/**
 * Not happy with this implementation of the currency swap but ran out of time.
 * This code does not follow DRY principles and is obviously a hard-coded solution.
 *
 */
@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  updateToUSDCurrency() {
    this.productService.fetchProductsByCurrency('USD');
  }

  updateToCADCurrency() {
    this.productService.fetchProductsByCurrency('CAD');
  }

  updateToEURCurrency() {
    this.productService.fetchProductsByCurrency('EUR');
  }
}
