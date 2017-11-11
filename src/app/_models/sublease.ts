export class Sublease {
  id: number = 0;
  email: string = "";
  address: string = "";
  description: string = "";
  price: number = 0;
  hasRoommates: boolean = false;
  roommates: Roommate[] = [];
  isFurnished: boolean = false;
  hasOpenHouse: boolean = false;
  openHouse: any;
  tags: string[] = [];
  imageUrls: string[] = [];


  constructor(id: number, email: string, address: string, description: string, price: number, roommates: Roommate[], isFurnished: boolean, openHouse: Date, tags: string[], imageUrls: string[]) {
    this.id = id;
    this.email = email;
    this.address = address;
    this.price = price;
    this.description = description;
    this.roommates = roommates;
    this.isFurnished = isFurnished;
    this.openHouse = openHouse;
    this.tags = tags;
    this.imageUrls = imageUrls;

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
