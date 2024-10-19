export interface ResultSummary {
    percentageResult: PercentageResult
    summaries: Summary[]
  }
  
  export interface PercentageResult {
      percentage: number; 
      description: string;
      feedback: string;
  }
  
  export interface Summary {
      type: SummaryType,
      value: number;
  }
  
  export enum SummaryType {
    Reaction = "Reaction",
    Memory = "Memory",
    Verbal = "Verbal",
    Visual = "Visual"
  }

  export const textColorMap: { [key in SummaryType]: string } = {
    [SummaryType.Reaction]: "hsl(0, 100%, 67%)",
    [SummaryType.Memory]: "hsl(39, 100%, 56%)",
    [SummaryType.Verbal]: "hsl(166, 100%, 37%)",
    [SummaryType.Visual]: "hsl(234, 85%, 45%)",
  }

  export const backgroundColorMap: { [key in SummaryType]: string } = {
    [SummaryType.Reaction]: "hsla(0, 100%, 67%, .1)",
    [SummaryType.Memory]: "hsla(39, 100%, 56%, 0.1)",
    [SummaryType.Verbal]: "hsla(166, 100%, 37%, 0.1)",
    [SummaryType.Visual]: "hsla(234, 85%, 45%, 0.1)",
  }

  export const iconMap: { [key in SummaryType ]: string } = {
    [SummaryType.Reaction]: "./assets/images/icon-reaction.svg",
    [SummaryType.Memory]: "./assets/images/icon-memory.svg",
    [SummaryType.Verbal]: "./assets/images/icon-verbal.svg",
    [SummaryType.Visual]: "./assets/images/icon-visual.svg",
  }