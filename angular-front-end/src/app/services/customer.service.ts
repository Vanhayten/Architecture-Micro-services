import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<any> {
    return this.http.get(`${environment.gatewayUrl}/CUSTOMER-SERVICE/customers`);
  }
}
