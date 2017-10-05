import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-sublease',
  templateUrl: './view-sublease.component.html',
  styleUrls: ['./view-sublease.component.css']
})
export class ViewSubleaseComponent implements OnInit {

  sublease = {
  title: 'Klondike House', url: 'assets/Klondike House.jpg', price: "500", location: "Riatta Place",
  amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
    title: 'Fitness Center',
    url: "fit-center"
  }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
    title: "Free Laundry",
    url: "laundry"
  }],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};

  constructor() { }

  ngOnInit() {
  }

}
