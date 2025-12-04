// TODO: Add the resource import from @angular/core
import { Component, signal, computed, resource, ChangeDetectionStrategy } from '@angular/core';

import { loadUser } from './user-api';

@Component({
  selector: 'app-user-profile-loader',
  imports: [],
  template: `
    <div>
      <h2>User Profile Loader</h2>

      <div>
        <button (click)="loadUser(1)">Load User 1</button>
        <button (click)="loadUser(2)">Load User 2</button>
        <button (click)="loadUser(999)">Load Invalid User</button>
        <button (click)="reloadUser()">Reload</button>
      </div>

      <div class="status">
        @if (isLoading()) {
          <p>Loading user...</p>
        } @else if (hasError()) {
          <p class="error">Error: {{ userResource.error()?.message }}</p>
        } @else if (userResource.hasValue()) {
          <div class="user-info">
            <h3>{{ userResource.value().name }}</h3>
            <p>{{ userResource.value().email }}</p>
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './user-profile-loader.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileLoader {
  userId = signal(1);
  userResource = resource({
    params: () => ({ id: this.userId() }),
    loader: (params) => loadUser(params.params.id)
  });
  isLoading = computed(() => this.userResource.status() === 'loading');
  hasError = computed(() => this.userResource.status() === 'error');

  loadUser(id: number) {
    this.userId.set(id);
  }
  reloadUser() {
    this.userResource.reload();
  }
}
