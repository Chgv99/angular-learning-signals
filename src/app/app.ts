import { Component } from '@angular/core';
import { UserProfileLoader } from './user-profile-loader/user-profile-loader';
import { UserDashboard } from "./user-dashboard/user-dashboard";


@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-user-dashboard />
      <app-user-profile-loader />
    </div>
  `,
  styleUrl: './app.css',
  imports: [UserProfileLoader, UserDashboard],
})
export class App {
  
}
