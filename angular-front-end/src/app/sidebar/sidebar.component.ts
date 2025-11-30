import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="sidebar d-flex flex-column flex-shrink-0 p-3 bg-white border-end h-100">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <div class="brand-icon me-2">
          <i class="bi bi-grid-3x3-gap-fill text-white"></i>
        </div>
        <span class="fs-4 fw-bold text-primary">MicroServices</span>
      </a>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a routerLink="/customers" routerLinkActive="active" class="nav-link link-dark mb-2">
            <i class="bi bi-people me-2"></i>
            Customers
          </a>
        </li>
        <li>
          <a routerLink="/products" routerLinkActive="active" class="nav-link link-dark mb-2">
            <i class="bi bi-box-seam me-2"></i>
            Products
          </a>
        </li>
        <li>
          <a routerLink="/bills" routerLinkActive="active" class="nav-link link-dark mb-2">
            <i class="bi bi-receipt me-2"></i>
            Bills
          </a>
        </li>
      </ul>
      <hr>
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
          <strong>Admin</strong>
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .sidebar {
      width: var(--sidebar-width);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
    }
    .brand-icon {
      width: 32px;
      height: 32px;
      background-color: var(--primary-color);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-link {
      font-weight: 500;
      color: var(--text-muted);
      border-radius: 8px;
      transition: all 0.2s;
    }
    .nav-link:hover {
      background-color: #f1f5f9;
      color: var(--primary-color);
    }
    .nav-link.active {
      background-color: var(--primary-color);
      color: white !important;
    }
    .nav-link.active i {
      color: white;
    }
  `]
})
export class SidebarComponent {}
