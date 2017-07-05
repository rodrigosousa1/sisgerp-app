import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";

import { DataService } from './data.service';
import { ProductDetail } from './../../../../shared/model/product/productDetail';


@Injectable()
export class ProductService extends DataService{

  private subject = new ReplaySubject();
  product$: Observable<ProductDetail> = this.subject.asObservable();

  constructor(http: Http) { 
    super("/api/v1/products", http);
  }

  addProduct(product: ProductDetail): void {
    this.subject.next(product);
  }


}
