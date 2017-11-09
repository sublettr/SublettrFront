export class LandingFilter {
  costFilter: number[];
  ratingFilter: number;
  tagFilter: string[];


  constructor(costFilter: number[], ratingFilter: number, tagFilter: string[]) {
    this.costFilter = costFilter;
    this.ratingFilter = ratingFilter;
    this.tagFilter = tagFilter;
  }
}
