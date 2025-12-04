import {Component, input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'product-card',
  template: `
    <div class="product-card">
      <h3>{{ name() }}</h3>
      <p class="price">{{ price() }}</p>
      <p class="status">Status: 
        @if (available()) {
          Available
        } @else {
          Out of stock
        }
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  name = input.required<string>();
  price = input.required<number>();
  available = input<boolean>(true);
}
