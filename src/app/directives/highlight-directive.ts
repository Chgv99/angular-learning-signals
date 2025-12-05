// TODO: Import input, signal, and computed from @angular/core
import {computed, Directive, input, signal} from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    '[style.backgroundColor]': 'backgroundStyle()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class HighlightDirective {
  // Signal inputs - same as components!
  color = input<string>('yellow');
  intensity = input<number>(0.3);
  // Internal state - same as components!
  private isHovered = signal(false);
  // Computed signals - same as components!
  backgroundStyle = computed(() => {
    const baseColor = this.color();
    const alpha = this.isHovered() ? this.intensity() : this.intensity() * 0.5;
    const colorMap: Record<string, string> = {
      'yellow': `rgba(255, 255, 0, ${alpha})`,
      'blue': `rgba(0, 100, 255, ${alpha})`,
      'green': `rgba(0, 200, 0, ${alpha})`,
      'red': `rgba(255, 0, 0, ${alpha})`,
    };
    return colorMap[baseColor] || colorMap['yellow'];
  });

  // ... signals from previous step ...
  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
