import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/publishLast';

import { ProductDetail } from './../../../../shared/model/product/productDetail';
import { ProductSummary } from './../../../../shared/model/product/productSummary';


@Injectable()
export class ProductService {

  private subject = new ReplaySubject();
  product$: Observable<ProductDetail> = this.subject.asObservable();

  constructor(private http: Http) { }

  findAllProducts(): Observable<ProductSummary[]> {
    return this.http.get(`/api/v1/products`)
            .map(res => res.json().payload)
            .publishLast().refCount();
  }

  findProductDetail(id: number): Observable<ProductDetail> {
    return this.http.get(`/api/v1/products/${id}`)
            .map(res => res.json().payload)
            .first();
  }

  addProduct(product: ProductDetail) {
    this.subject.next(product);
  }

  saveProduct(product: ProductDetail): Observable<ProductDetail> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`/api/v1/product`, product, headers)
            .map(res => res.json())
            .first();
  }

}
