import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductService } from 'app/services/product.service';
import { ProductDetail } from './../../../../../shared/model/product/productDetail';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {

  productDetail$: Observable<ProductDetail>;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.productDetail$ = this.productService.findProductDetail(this.route.snapshot.params.id);
  }

}
