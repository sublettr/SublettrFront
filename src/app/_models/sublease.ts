export class Sublease {
  id: number = 0;
  email: string = "";
  address: string = "";
  description: string = "";
  price: number = 0;
  rating: number = 0;
  ratingTotal: number = 0;
  ratingNumber: number = 0;
  hasRoommates: boolean = false;
  roommates: Roommate[] = [];
  isFurnished: boolean = false;
  hasOpenHouse: boolean = false;
  openHouse: any;
  tags: string[] = [];
  imageUrl: string = "";


  constructor(id: number, email: string, address: string, description: string, price: number, rating: number, ratingTotal: number, ratingNumber: number, roommates: Roommate[], isFurnished: boolean, openHouse: Date, tags: string[], imageUrl: string) {
    this.id = id;
    this.email = email;
    this.address = address;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.ratingTotal = ratingTotal;
    this.ratingNumber = ratingNumber;
    this.roommates = roommates;
    this.isFurnished = isFurnished;
    this.openHouse = openHouse;
    this.tags = tags;
    this.imageUrl = imageUrl;

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
