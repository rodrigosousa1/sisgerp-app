import { AppError } from './../common/errors/app-error';
import { NotFoundError } from './../common/errors/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/publishLast';



@Injectable()
export class DataService {

  constructor(protected url: string, 
              protected http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(res => res.json().payload)
      .catch(this.handleError)
      .publishLast().refCount();
  }

  getDetail(id: number) {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json().payload)
      .catch(this.handleError)
      .first();
  }

  create(resourse) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${this.url}`, resourse, headers)
      .map(res => res.json())
      .catch(this.handleError)
      .first();
  }

  private handleError(error: Response) {
    if (error instanceof NotFoundError)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError());
  }
}