import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/publishLast';

import { CustomerDetail } from './../../../../shared/model/customer/customerDetail';
import { CustomerSummary } from './../../../../shared/model/customer/customerSummary';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  findAllCustomers(): Observable<CustomerSummary> {
    return this.http.get(`/api/v1/customers`)
        .map(res => res.json().payload)
        .publishLast().refCount();
  }

  findCustomerDetail(id: number): Observable<CustomerDetail> {
    return this.http.get(`/api/v1/customers/${id}`)
            .map(res => res.json().payload)
            .first();
  }

  /** revisar essa funcao */
  findCustomerByCpfCnpj(cpfCnpj: string): Observable<CustomerDetail> {
    return this.http.get(`/api/v1/customers/search?cpfCnpj=${cpfCnpj}`)
            .map(res => res.json().payload)
            .first();
  }

  saveCustomer(customer: CustomerDetail): Observable<CustomerDetail> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`/api/v1/customer`, customer, headers)
            .map(res => res.json())
            .first();
  }

}
