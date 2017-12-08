export class LandingFilter {
  costFilter: number[];
  ratingFilter: number[];
  tags: Tag[];
  tagFilter: Tag[];


  constructor(costFilter: number[], ratingFilter: number[], tags: Tag[], tagFilter: Tag[]) {
    this.costFilter = costFilter;
    this.ratingFilter = ratingFilter;
    this.tags = tags;
    this.tagFilter = tagFilter;
  }

  public resetFilter(): void {
    this.costFilter = [0,2000];
    this.ratingFilter = [0,5];
    this.tagFilter = [];
  }
}

export class Tag {
  label: string = "";
  value: string = "";

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
}
