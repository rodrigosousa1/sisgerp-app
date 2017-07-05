import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/publishLast';

import { CustomerDetail } from './../../../../shared/model/customer/customerDetail';


@Injectable()
export class CustomerService extends DataService {

  constructor(http: Http) {
    super("/api/v1/customers", http);
  }

  /** revisar essa funcao */
  getCustomerByCpfCnpj(cpfCnpj: string): Observable<CustomerDetail> {
    return this.http.get(`${this.url}/search?cpfCnpj=${cpfCnpj}`)
      .map(res => res.json().payload)
      .first();
  }

}
