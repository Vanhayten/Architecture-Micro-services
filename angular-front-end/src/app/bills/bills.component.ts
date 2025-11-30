import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingService } from '../services/billing.service';

import { Bill } from '../models/bill.model';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent implements OnInit {
  bill$: Observable<Bill> | undefined;
  errorMessage: string | undefined;

  constructor(private billingService: BillingService) { }

  ngOnInit(): void {
    this.bill$ = this.billingService.getBill(1).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(() => err);
      })
    );
  }
}
