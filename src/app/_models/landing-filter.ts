export class LandingFilter {
  costFilter: number[];
  ratingFilter: number;
  tags: any[];
  tagFilter: any[];


  constructor(costFilter: number[], ratingFilter: number, tags: any[], tagFilter: any[]) {
    this.costFilter = costFilter;
    this.ratingFilter = ratingFilter;
    this.tags = tags;
    this.tagFilter = tagFilter;
  }
}
