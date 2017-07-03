import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

import { ProductService } from "app/services/product.service";
import { ProductDetail } from './../../../../../shared/model/product/productDetail';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder,
              private productService: ProductService) {
      
      this.createProductForm();
   }

  ngOnInit() { }

  createProductForm(): void  {
    this.productForm = this.fb.group({
          nome: ['', Validators.required],
          descricao: [''],
          tamanho: [''],
          imgUrl: [''],
          preco: ['', Validators.required]
      });
  }

  saveProduct(product: ProductDetail): void {
    this.productService.saveProduct(_.cloneDeep(product))
      .subscribe(
        () => {
          alert("product created successfully");
        }, 
        console.error
      );
  }

}
