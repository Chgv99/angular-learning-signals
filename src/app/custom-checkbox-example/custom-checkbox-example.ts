import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { CustomCheckbox } from './custom-checkbox/custom-checkbox';

@Component({
  selector: 'app-custom-checkbox-example',
  imports: [ CustomCheckbox ],
  template: `
    <div class="shopping-app">
      <h1>Custom Checkbox Example</h1>

      <div class="demo-section">
        
        <custom-checkbox
          [(checked)]="agreedToTerms"
          label="I agree to the terms"
        />

        <custom-checkbox
          [(checked)]="enableNotifications"
          label="Enable notifications"
        />
       

        <div class="controls">
          <p>Terms agreed:
            @if (agreedToTerms()) {
              Yes
            } @else {
              No
            }
          </p>
          <p>Notifications:
            @if (enableNotifications()) {
              Yes
            } @else {
              No
            }
          </p>
          <!-- TODO: Add (click) handlers -->
          <button (click)="toggleTermsFromParent()">Toggle Terms from Parent</button>
          <button (click)="resetAll()">Reset All</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './custom-checkbox-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCheckboxExample {
  agreedToTerms = model(false);
  enableNotifications = model(true);
  toggleTermsFromParent() {
    this.agreedToTerms.set(!this.agreedToTerms());
  }
  resetAll() {
    this.agreedToTerms.set(false);
    this.enableNotifications.set(false);
  }
}
