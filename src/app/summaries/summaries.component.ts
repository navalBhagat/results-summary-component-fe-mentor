import { Component, Input } from '@angular/core';
import { Summary } from '../types';
import { SummaryComponent } from "../summary/summary.component";

@Component({
  selector: 'app-summaries',
  standalone: true,
  imports: [SummaryComponent],
  template: `
    <section class="summaries">
      <span class="summaries-header">Summary</span>
      @for (summary of summaries; track $index) {
        <app-summary [summary]="summary"></app-summary>
      }
      <button class="continue-button">Continue</button>
    </section>
  `,
  styleUrl: './summaries.component.css'
})
export class SummariesComponent {
  @Input() summaries!: Summary[]
}
