import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Bill } from '../models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }

  public getBill(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${environment.gatewayUrl}/billing-service/bills/` + id);
  }
}
