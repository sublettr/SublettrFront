export class LandingFilter {
  costFilter: number = 0;
  ratingFilter: number = 0;
  tagFilter: string[];


  constructor(costFilter: number, ratingFilter: number, tagFilter: string[]) {
    this.costFilter = costFilter;
    this.ratingFilter = ratingFilter;
    this.tagFilter = tagFilter;
  }
}
