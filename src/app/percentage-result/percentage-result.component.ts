import { Component, Input } from '@angular/core';
import { PercentageResult } from '../types';

@Component({
  selector: 'app-percentage-result',
  standalone: true,
  imports: [],
  template: `
    <section class="percentage">
      <span class="percentage-header">Your Result</span>
      <div class="percentage-circle">
        <span class="percentage-value">{{ percentageResult.percentage }}</span>
        <span class="percentage-total">of 100</span>
      </div>
      <span class="percentage-description">
          {{ percentageResult.description }}
      </span>
      <span class="percentage-feedback">
          {{ percentageResult.feedback }}
      </span>
    </section>`,
  styleUrl: './percentage-result.component.css'
})
export class PercentageResultComponent {
  @Input() percentageResult!: PercentageResult
}
