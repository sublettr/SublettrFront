export class Sublease {
  id: number = 0;
  userId: number = -1;
  address: string = "";
  description: string = "";
  roommates: number = 0;
  isFurnished: boolean = false;
  openHouse: Date;
  tags: string[] = [];


  constructor(id: number, userId: number, address: string, description: string, roommates: number, isFurnished: boolean, openHouse: Date, tags: string[]) {
    this.id = id;
    this.userId = userId;
    this.address = address;
    this.description = description;
    this.roommates = roommates;
    this.isFurnished = isFurnished;
    this.openHouse = openHouse;
    this.tags = tags;
  }
}
