import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingService } from '../services/billing.service';

import { Bill } from '../models/bill.model';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.css'
})
export class BillsComponent implements OnInit {
  bill: Bill | undefined;

  constructor(private billingService: BillingService) { }

  ngOnInit(): void {
    this.billingService.getBill(1).subscribe({
      next: (data) => {
        this.bill = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
