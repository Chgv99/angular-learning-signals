import { Component } from '@angular/core';
import { UserProfileLoader } from './user-profile-loader/user-profile-loader';
import { UserDashboard } from "./user-dashboard/user-dashboard";
import { ShoppingApp } from "./shopping-app/shopping-app";
import { CustomCheckboxExample } from "./custom-checkbox-example/custom-checkbox-example";
import { CartStoreExample } from "./cart-store-example/cart-store-example";
import { SignalsDirectivesExample } from "./signals-directives-example/signals-directives-example";
import { AdvancedShoppingCart } from "./advanced-shopping-cart/advanced-shopping-cart";
import { ThemeManager } from "./theme-manager/theme-manager";


@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-user-dashboard />
      <hr />
      <app-user-profile-loader />
      <hr />
      <app-shopping-app />
      <hr />
      <app-custom-checkbox-example />
      <hr />
      <app-cart-store-example />
      <hr />
      <app-signals-directives-example />
      <hr />
      <app-advanced-shopping-cart />
      <hr />
      <app-theme-manager />
    </div>
  `,
  styleUrl: './app.css',
  imports: [UserProfileLoader, UserDashboard, ShoppingApp, CustomCheckboxExample, CartStoreExample, SignalsDirectivesExample, AdvancedShoppingCart, ThemeManager],
})
export class App {
  
}
