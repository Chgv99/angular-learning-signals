// TODO: Import inject from @angular/core
import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import { CartStore } from '../service/cart-store';
import { CartDisplay } from './cart-display/cart-display';

@Component({
  selector: 'app-cart-store-example',
  imports: [CartDisplay],
  template: `
    <div class="shopping-app">
      <header>
        <h1>Signals with Services Demo</h1>
        <div class="cart-badge">
          Cart: {{ cartStore.totalQuantity() }} items (\${{ cartStore.totalPrice() }})
        </div>
      </header>
      <main>
        <cart-display />
      </main>
    </div>
  `,
  styleUrl: './cart-store-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartStoreExample {
  cartStore = inject(CartStore);
}
