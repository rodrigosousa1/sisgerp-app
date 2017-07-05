import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { ProductService } from 'app/services/product.service';
import { ProductSummary } from './../../../../../shared/model/product/productSummary';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: []
})
export class ProductsListComponent implements OnInit {

  products$: Observable<ProductSummary[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.products$ = this.productService.getAll();
  }

}
