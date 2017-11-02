export class Sublease {
  id: number;
  userId: number;
  address: string;
  description: string;
  roommates: number;
  isFurnished: boolean;
  openHouse: Date;
  imageUrls: string[];


  constructor(id: number, userId: number, address: string, description: string, roommates: number, isFurnished: boolean, openHouse: Date, imageUrls: string[]) {
    this.id = id;
    this.userId = userId;
    this.address = address;
    this.description = description;
    this.roommates = roommates;
    this.isFurnished = isFurnished;
    this.openHouse = openHouse;
    this.imageUrls = imageUrls;
  }
}
