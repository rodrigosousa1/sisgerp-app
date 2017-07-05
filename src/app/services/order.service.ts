import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { DataService } from './data.service';

@Injectable()
export class OrderService extends DataService {

  constructor(http: Http) {
    super("/api/v1/orders", http);
   }


}
