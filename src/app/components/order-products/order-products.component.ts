import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductDetail } from './../../../../../shared/model/product/productDetail';

@Component({
  selector: 'order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent implements OnInit {

  @Input('productList') productList: ProductDetail[];
  
  constructor() { }

  ngOnInit() {
  }
  

}
