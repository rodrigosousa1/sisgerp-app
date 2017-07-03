import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

import { CustomerDetail } from './../../../../../shared/model/customer/customerDetail';
import { CustomerService } from 'app/services/customer.service';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;

  isCpfSelected: boolean = true;

  constructor(private fb: FormBuilder,
              private customerService: CustomerService) {

              this.createCustomerForm();
  }

  ngOnInit() { }


  createCustomerForm():void {
      this.customerForm = this.fb.group({
        nome: ['', Validators.required],
        cpfCnpj: ['', Validators.required],
        endereco: ['', Validators.required],
        numero: [],
        complemento: [],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
        cep: ['', Validators.required],
        telefone: [],
        nomeFantasia: [{value: null, disabled: true}],
        inscricaoEstadual: [{value: null, disabled: true}],
        email: []
      });
  }



  onChange(value: string): void {
    if (value === 'cpf') {
      this.isCpfSelected = true;
      this.disableCnpjFields();
    }
    else {
      this.isCpfSelected = false;
      this.enableCnpjFields();
    }
  }
  
  private disableCnpjFields() {
    this.customerForm.controls['nomeFantasia'].disable();
    this.customerForm.controls['inscricaoEstadual'].disable();
  }

  private enableCnpjFields() {
     this.customerForm.controls['nomeFantasia'].enable();
     this.customerForm.controls['inscricaoEstadual'].enable();
  }

  saveCustomer(customer: CustomerDetail): void {
    this.customerService.saveCustomer(_.cloneDeep(customer))
      .subscribe(
        () => {
          alert("customer created successfully");
        },
        console.error
      );
  }

}
