import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/publishLast';

import { OrderDetail } from './../../../../shared/model/order/orderDetail';
import { OrderSummary } from './../../../../shared/model/order/orderSummary';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  findAllOrders(): Observable<OrderSummary[]> {
    return this.http.get(`/api/v1/orders`)
            .map(res => res.json().payload)
            .publishLast().refCount();
  }


/** revisar */
  saveOrder(order): Observable<OrderDetail> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`/api/v1/order`, order, headers)
            .map(res => res.json())
            .first();
  }

}
