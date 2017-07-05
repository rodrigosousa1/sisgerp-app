import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class ViaCepService {

  private url: string = 'http://viacep.com.br/ws'

  constructor(private http: Http) { }

  getAddressByCep(cep: string): Observable<any> {
    return this.http.get(`${this.url}/${cep}/json/ `)
      .map(res => res.json())
      .first();
  }

}
