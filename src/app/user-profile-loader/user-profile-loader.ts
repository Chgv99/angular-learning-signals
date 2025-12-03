// TODO: Add the resource import from @angular/core
import {Component, signal, computed, ChangeDetectionStrategy} from '@angular/core';
import {loadUser} from './user-api';

@Component({
  selector: 'app-user-profile-loader',
  imports: [],
  template: `
    <div>
      <h2>User Profile Loader</h2>

      <div>
        <!-- TODO: Add (click) handlers to call loadUser() with appropriate IDs -->
        <button>Load User 1</button>
        <button>Load User 2</button>
        <button>Load Invalid User</button>
        <!-- TODO: Add (click) handler to call reloadUser() -->
        <button>Reload</button>
      </div>

      <div class="status">
        <!-- TODO: Replace with @if blocks for loading, error, and success states -->
        <!-- Use isLoading(), hasError(), and userResource.hasValue() -->
        <!-- For loading: show "Loading user..." -->
        <!-- For error: show error message with userResource.error()?.message -->
        <!-- For success: show user name and email from userResource.value() -->
        <p>Click a button to load user data</p>
      </div>
    </div>
  `,
  styleUrl: './user-profile-loader.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileLoader {

}
