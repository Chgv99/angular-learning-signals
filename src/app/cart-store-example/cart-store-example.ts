// TODO: Import inject from @angular/core
import {Component, ChangeDetectionStrategy} from '@angular/core';
// TODO: Import CartStore from './cart-store'
// TODO: Import CartDisplay from './cart-display'

@Component({
  selector: 'app-cart-store-example',
  // TODO: Add CartDisplay to imports array
  template: `
    <div class="shopping-app">
      <header>
        <h1>Signals with Services Demo</h1>
        <div class="cart-badge">
          Cart: Loading... items ($Loading...)
        </div>
      </header>

      <main>
        <!-- TODO: Add cart-display component here -->
      </main>
    </div>
  `,
  styleUrl: './cart-store-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartStoreExample {
  // TODO: Inject CartStore using inject(CartStore)
}
