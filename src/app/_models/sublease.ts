export class Sublease {
  id: number = 0;
  email: string = "";
  address: string = "";
  description: string = "";
  hasRoommates: boolean = false;
  roommates: Roommate[] = [];
  isFurnished: boolean = false;
  hasOpenHouse: boolean = false;
  openHouse: any;
  tags: string[] = [];
  imageUrls: string[] = [];


  constructor(id: number, email: string, address: string, description: string, roommates: Roommate[], isFurnished: boolean, openHouse: Date, tags: string[]) {
    this.id = id;
    this.email = email;
    this.address = address;
    this.description = description;
    this.roommates = roommates;
    this.isFurnished = isFurnished;
    this.openHouse = openHouse;
    this.tags = tags;

    if (roommates.length > 0) {
      this.hasRoommates = true;
    }

    if (this.openHouse != undefined) {
      this.hasOpenHouse = true;
    }
  }
}

export interface Roommate {
  id: number;
  subletId: number;
  age: number;
  grade: string;
  major: string;
  sex: string;
}
