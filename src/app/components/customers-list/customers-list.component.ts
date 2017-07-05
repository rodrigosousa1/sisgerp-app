import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { CustomerService } from 'app/services/customer.service';
import { CustomerSummary } from './../../../../../shared/model/customer/customerSummary';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styles: []
})
export class CustomersListComponent implements OnInit {

  customers$: Observable<CustomerSummary>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers$ = this.customerService.getAll();
  }

}
