import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { OrderService } from "app/services/order.service";
import { OrderSummary } from './../../../../../shared/model/order/orderSummary';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styles: []
})
export class OrderListComponent implements OnInit {

  orders$: Observable<OrderSummary[]>;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders$ = this.orderService.findAllOrders();
  }

}
