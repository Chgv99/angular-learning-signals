import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomCheckbox } from './custom-checkbox/custom-checkbox';

@Component({
  selector: 'app-custom-checkbox-example',
  imports: [ CustomCheckbox ],
  template: `
    <div class="shopping-app">
      <h1>Custom Checkbox Example</h1>

      <div class="demo-section">
        <!-- TODO: Uncomment and add [(checked)] two-way binding -->
        <!--
        <custom-checkbox
          ___ADD_TWO_WAY_BINDING___
          label="I agree to the terms"
        />

        <custom-checkbox
          ___ADD_TWO_WAY_BINDING___
          label="Enable notifications"
        />
        -->

        <div class="controls">
          <p>Terms agreed:
            <!-- TODO: Replace with @if block using agreedToTerms() -->
            ???
          </p>
          <p>Notifications:
            <!-- TODO: Replace with @if block using enableNotifications() -->
            ???
          </p>
          <!-- TODO: Add (click) handlers -->
          <button>Toggle Terms from Parent</button>
          <button>Reset All</button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './custom-checkbox-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCheckboxExample {
  // TODO: Add parent signal models
  // agreedToTerms = model(false);
  // enableNotifications = model(true);
  // TODO: Add methods to test two-way binding
  // toggleTermsFromParent() {
  //   this.agreedToTerms.set(!this.agreedToTerms());
  // }
  // resetAll() {
  //   this.agreedToTerms.set(false);
  //   this.enableNotifications.set(false);
  // }
}
