import { Component } from '@angular/core';
import { UserProfileLoader } from './user-profile-loader/user-profile-loader';
import { UserDashboard } from "./user-dashboard/user-dashboard";
import { ShoppingApp } from "./shopping-app/shopping-app";


@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-user-dashboard />
      <hr />
      <app-user-profile-loader />
      <hr />
      <app-shopping-app />
    </div>
  `,
  styleUrl: './app.css',
  imports: [UserProfileLoader, UserDashboard, ShoppingApp],
})
export class App {
  
}
