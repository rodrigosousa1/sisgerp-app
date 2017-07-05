import { Observable } from 'rxjs/Observable';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { NotyMessages } from 'app/common/messages/noty-messages';
import { OrderService } from 'app/services/order.service';
import { ProductService } from 'app/services/product.service';
import { CustomerService } from 'app/services/customer.service';
import { OrderDetail } from './../../../../../shared/model/order/orderDetail';
import { OrderProduct } from './../../../../../shared/model/order/orderProduct';
import { ProductDetail } from './../../../../../shared/model/product/productDetail';
import { CustomerDetail } from './../../../../../shared/model/customer/customerDetail';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  customer$: Observable<CustomerDetail>;
  valorTotalPedido: number = 0.0;

  constructor(private customerService: CustomerService,
              private productService: ProductService,
              private orderService: OrderService,
              private fb: FormBuilder) {
        
        this.createOrderForm();

  }

  ngOnInit() {
    this.productService.product$.subscribe(product => {
      this.products.push(new FormControl(product));
      this.valorTotalPedido = this.total(this.products.value);
      this.valorTotal.setValue(this.valorTotalPedido);
    });
  }

 private createOrderForm(): void {
      this.orderForm = this.fb.group({
        cliente: this.createCustomerForm(),
        clienteId: ['', Validators.required],
        dataPedido: [new Date(), Validators.required],
        valorTotal:['', Validators.required],
        comprovanteUrl:['', Validators.required],
        statusPedido:['AGUARDANDO'],
        tipoEnvio:['', Validators.required],
        observacao:[],
        produtos: this.fb.array([], Validators.required)
      });
  }

  get products(): FormArray {
    return (this.orderForm.get('produtos') as FormArray);
  }

  get valorTotal(): AbstractControl {
    return this.orderForm.get('valorTotal');
  }

  private createCustomerForm() {
      return this.fb.group (
        {
          nome: ['', Validators.required],
          cpfCnpj: ['', Validators.required],
          endereco: ['', Validators.required],
          bairro: ['', Validators.required],
          numero: [],
          cep: ['', Validators.required],
          complemento: [],
          cidade: ['', Validators.required],
          estado: ['', Validators.required]
        })
  }



  findCustomerByCpfCnpj(cpfCnpj: string) {
    this.customerService.getCustomerByCpfCnpj(cpfCnpj)
      .subscribe(customer => {
        this.fillCustomerForm(customer);
      });
  }


  fillCustomerForm(customer: CustomerDetail): void {
    this.orderForm.get('cliente.nome').setValue(customer.nome);
    this.orderForm.get('cliente.cpfCnpj').setValue(customer.cpfCnpj);
    this.orderForm.get('cliente.endereco').setValue(customer.endereco);
    this.orderForm.get('cliente.bairro').setValue(customer.bairro);
    this.orderForm.get('cliente.numero').setValue(customer.numero);
    this.orderForm.get('cliente.cep').setValue(customer.cep);
    this.orderForm.get('cliente.complemento').setValue(customer.complemento);
    this.orderForm.get('cliente.cidade').setValue(customer.cidade);
    this.orderForm.get('cliente.estado').setValue(customer.estado);
    this.orderForm.get('clienteId').setValue(customer.id);
  }

  createOrder(newOrder: OrderDetail) {
    this.orderService.create(this.prepareOrder(newOrder))
      .subscribe(() => NotyMessages.onSuccess("Pedido cadastrado com sucesso!"));
  }


  total(products: ProductDetail[]):number {
    return products.map(product => product.detalheProduto.valor)
      .reduce((acc, currentValue) => acc + currentValue);
  }


  private prepareOrder({ 
    clienteId,
    dataPedido,
    valorTotal,
    comprovanteUrl,
    statusPedido,
    observacao,
    tipoEnvio,
    produtos,
    cliente
   }: any) {

    return {
      clienteId,
      dataPedido,
      valorTotal,
      comprovanteUrl,
      statusPedido,
      observacao,
      tipoEnvio,
      detalheProduto: produtos.map(produtos => produtos.detalheProduto)
    }
          
}


}
