import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

import { CustomerDetail } from './../../../../../shared/model/customer/customerDetail';
import { CustomerService } from 'app/services/customer.service';
import { ViaCepService } from './../../services/via-cep.service';
import { NotyMessages } from 'app/common/messages/noty-messages';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;

  isCpfSelected: boolean = true;

  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private viaCepService: ViaCepService) {

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

  get nome() {
    return this.customerForm.get('nome');
  }

  get cpfCnpj() {
    return this.customerForm.get('cpfCnpj');
  }

  get endereco() {
    return this.customerForm.get('endereco');
  }

  get bairro() {
    return this.customerForm.get('bairro');
  }

  get cidade() {
    return this.customerForm.get('cidade');
  }

  get estado() {
    return this.customerForm.get('estado');
  }

  get cep() {
    return this.customerForm.get('cep');
  }

  get complemento() {
    return this.customerForm.get('complemento');
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

  getAddressByCep(cep: string) {
    this.viaCepService.getAddressByCep(cep)
      .subscribe(cep => {
        this.endereco.setValue(cep.logradouro);
        this.bairro.setValue(cep.bairro);
        this.complemento.setValue(cep.complemento);
        this.cidade.setValue(cep.localidade);
        this.estado.setValue(cep.uf);
      });
  }
  
  private disableCnpjFields() {
    this.customerForm.controls['nomeFantasia'].disable();
    this.customerForm.controls['inscricaoEstadual'].disable();
  }

  private enableCnpjFields() {
     this.customerForm.controls['nomeFantasia'].enable();
     this.customerForm.controls['inscricaoEstadual'].enable();
  }

  createCustomer(newCustomer: CustomerDetail): void {
    this.customerService.create(_.cloneDeep(newCustomer))
      .subscribe(() => NotyMessages.onSuccess("Cliente cadastrado com sucesso!"));
  }

}
