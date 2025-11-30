import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../services/inventory.service';

import { Product } from '../models/product.model';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  errorMessage: string | undefined;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.products$ = this.inventoryService.getProducts().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(() => err);
      })
    );
  }
}
