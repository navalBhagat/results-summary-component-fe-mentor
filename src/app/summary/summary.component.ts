import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Summary, backgroundColorMap, iconMap, textColorMap } from '../types';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="summary-pill" [ngStyle]="{'color': textColor, 'background': backgroundColor}">
      <div class="pill-start">
        <img class="pill-icon" [src]="iconSrc"/>
        <span class="pill-header">{{ summary.type.toString() }}</span>
      </div>
      <div class="pill-end">
        <span class="pill-value">{{ summary.value }}</span>
        <span class="pill-value-total">/ 100</span>
      </div>
    </div>
  `,
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  @Input() summary!: Summary

  get iconSrc(): string {
    return iconMap[this.summary.type];
  }

  get textColor(): string {
    return textColorMap[this.summary.type];
  }

  get backgroundColor(): string { 
    return backgroundColorMap[this.summary.type]

  }
}
