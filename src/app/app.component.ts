import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResultSummary, SummaryType } from './types';
import { PercentageResultComponent } from "./percentage-result/percentage-result.component";
import { SummariesComponent } from "./summaries/summaries.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PercentageResultComponent, SummariesComponent],
  template: `<main class="results">
    <app-percentage-result [percentageResult]="resultSummary.percentageResult"></app-percentage-result>
    <app-summaries [summaries]="resultSummary.summaries"></app-summaries>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  resultSummary: ResultSummary = {
    percentageResult: {
      percentage: 76,
      description: 'Great',
      feedback: 'You scored higher than 65% of the people who have taken these tests.'
    },
    summaries: [
      {
        type: SummaryType.Reaction, 
        value: 80
      },
      {
        type: SummaryType.Memory, 
        value: 92
      },
      {
        type: SummaryType.Verbal, 
        value: 61
      },
      {
        type: SummaryType.Visual, 
        value: 72
      }
    ]
  }
}