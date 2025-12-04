import { Component } from '@angular/core';
import { UserProfileLoader } from './user-profile-loader/user-profile-loader';
import { UserDashboard } from "./user-dashboard/user-dashboard";
import { ShoppingApp } from "./shopping-app/shopping-app";
import { CustomCheckboxExample } from "./custom-checkbox-example/custom-checkbox-example";


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
    </div>
  `,
  styleUrl: './app.css',
  imports: [UserProfileLoader, UserDashboard, ShoppingApp, CustomCheckboxExample],
})
export class App {
  
}
