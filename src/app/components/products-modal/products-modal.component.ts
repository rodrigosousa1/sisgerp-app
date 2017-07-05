import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import * as _ from "lodash";

import { ProductService } from 'app/services/product.service';
import { ProductDetail } from './../../../../../shared/model/product/productDetail';

@Component({
  selector: 'products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.css']
})
export class ProductsModalComponent implements OnInit {

  products$: Observable<ProductDetail[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getAll();
  }

/* Revisar função */
  addProduct(product: ProductDetail, quantity: number): void {
    const productDetail = this.createProductDetail(product, quantity);
    this.productService.addProduct(_.cloneDeep(productDetail));
  }

  createProductDetail(product: ProductDetail, quantity: number) {
      const detail = {
        detalheProduto: { 
          quantidade: quantity,
          valor: quantity * product.preco, 
          produtoId: product.id
        }
      }
      
      return  Object.assign(detail, product);
  }



}
