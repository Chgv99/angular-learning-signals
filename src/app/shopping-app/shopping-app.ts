// TODO: Import signal from @angular/core
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-shopping-app',
  imports: [ProductCard],
  template: `
    <div class="shopping-app">
      <h1>Input Signals Demo</h1>

      <div class="demo-section">
        <h2>Signal Inputs (Parent → Child)</h2>
        <p>Data flows down from parent to child via signal inputs:</p>

        <product-card
          [name]="productName()"
          [price]="productPrice()"
          [available]="productAvailable()"
        />

        <!-- Add controls to test reactivity -->
        <div class="controls">
          <button (click)="updateProduct()">Update Product Info</button>
          <button (click)="toggleAvailability()">Toggle Availability</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './shopping-app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingApp {
  productName = signal('Demo Product');
  productPrice = signal(99);
  productAvailable = signal(true);
  updateProduct() {
    this.productName.set('Updated Product');
    this.productPrice.set(149);
  }
  toggleAvailability() {
    this.productAvailable.set(!this.productAvailable());
  }
}
