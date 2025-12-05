import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HighlightDirective } from '../directives/highlight-directive';

@Component({
  selector: 'app-signals-directives-example',
  imports: [HighlightDirective],
  template: `
    <div>
      <h1>Directive with Signals</h1>

      <div highlight color="blue" [intensity]="0.2">
        Hover me - Blue highlight
      </div>

      <div highlight color="green" [intensity]="0.4">
        Hover me - Green highlight
      </div>

      <div highlight color="yellow" [intensity]="0.6">
        Hover me - Yellow highlight
      </div>
    </div>
  `,
  styleUrl: './signals-directives-example.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsDirectivesExample {

}
