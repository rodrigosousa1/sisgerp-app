import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { routerConfig } from "./router.config";
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { OrderProductsComponent } from './components/order-products/order-products.component';
import { ProductsModalComponent } from './components/products-modal/products-modal.component';
import { OrderService } from './services/order.service';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { ViaCepService } from './services/via-cep.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent,
    ProductDetailComponent,
    CustomersListComponent,
    CustomerComponent,
    CustomerDetailComponent,
    OrderListComponent,
    OrderComponent,
    OrderProductsComponent,
    ProductsModalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule,
  ],
  providers: [
    ProductService,
    CustomerService,
    OrderService,
    ViaCepService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
