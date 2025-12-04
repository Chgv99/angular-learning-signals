import { Component } from '@angular/core';
import { UserProfileLoader } from './user-profile-loader/user-profile-loader';
import { UserDashboard } from "./user-dashboard/user-dashboard";
import { ShoppingApp } from "./shopping-app/shopping-app";
import { CustomCheckboxExample } from "./custom-checkbox-example/custom-checkbox-example";
import { CartStoreExample } from "./cart-store-example/cart-store-example";


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
    </div>
  `,
  styleUrl: './app.css',
  imports: [UserProfileLoader, UserDashboard, ShoppingApp, CustomCheckboxExample, CartStoreExample],
})
export class App {
  
}
