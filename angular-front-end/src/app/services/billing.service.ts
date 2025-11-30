import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }

  public getBill(id: number): Observable<any> {
    return this.http.get(`${environment.gatewayUrl}/BILLING-SERVICE/bills/` + id);
  }
}
