export class LandingFilter {
  costFilter: number[];
  ratingFilter: number;
  tags: Tag[];
  tagFilter: Tag[];


  constructor(costFilter: number[], ratingFilter: number, tags: Tag[], tagFilter: Tag[]) {
    this.costFilter = costFilter;
    this.ratingFilter = ratingFilter;
    this.tags = tags;
    this.tagFilter = tagFilter;
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

