export class Tag {
  id: number = 0;
  tag: string = "";
  isAmen: boolean = false;

  constructor(id: number, tag: string, isAmen) {
    this.id = id;
    this.tag = tag;
    this.isAmen = isAmen;
  }
}
