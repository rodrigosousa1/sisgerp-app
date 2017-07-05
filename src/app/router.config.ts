import { Routes } from '@angular/router';

import { OrderComponent } from './components/order/order.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'



export const routerConfig: Routes = [
    {
        path: 'products/list',
        component: ProductsListComponent
    },
    {
        path: 'products/new',
        component: ProductComponent
    },
    {
        path: 'products/:id/details',
        component: ProductDetailComponent
    },
    {
        path: 'customers/list',
        component: CustomersListComponent
    },
    {
        path: 'customers/new',
        component: CustomerComponent
    },
    {
        path: 'customers/:id/details',
        component: CustomerDetailComponent
    },
    {
        path: 'orders/list',
        component: OrderListComponent
    },
    {
        path: 'orders/new',
        component: OrderComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'orders/new'
    },
    {   path: '**',
        component: ProductsListComponent
    }

];