import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CustomerDetail } from './../../../../../shared/model/customer/customerDetail';
import { CustomerService } from 'app/services/customer.service';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styles: []
})
export class CustomerDetailComponent implements OnInit {

  customerDetail$: Observable<CustomerDetail>;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerDetail$ = this.customerService.findCustomerDetail(this.route.snapshot.params.id);
  }

}
