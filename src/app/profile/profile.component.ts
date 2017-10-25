import {Component, OnInit} from '@angular/core';
import {User} from "../_models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  savedSubleases = [{
    id: "0",
    title: 'Klondike House',
    url: 'assets/Klondike House.jpg',
    price: "500",
    location: "Riatta Place",
    address: "1111 State Street",
    amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
      title: 'Fitness Center',
      url: "fit-center"
    }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
      title: "Free Laundry",
      url: "laundry"
    }],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
    {
      id: "0",
      title: 'Klondike House',
      price: "500",
      url: 'assets/Klondike House.jpg',
      location: "Riatta Place",
      address: "1111 State Street",
      amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      title: 'Klondike House',
      address: "1111 State Street",
      price: "500",
      url: "assets/Klondike House.jpg",
      location: "Riatta Place",
      isFavorited: true,
      amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      title: 'Klondike House',
      address: "1111 State Street",
      price: "500",
      url: "assets/Klondike House.jpg",
      location: "Riatta Place",
      isFavorited: false,
      amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      title: 'Klondike House',
      address: "1111 State Street",
      price: "500",
      url: "assets/Klondike House.jpg",
      location: "Riatta Place",
      isFavorited: false,
      amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      title: 'Klondike House',
      address: "1111 State Street",
      price: "500",
      url: "assets/Klondike House.jpg",
      location: "Riatta Place",
      isFavorited: false,
      amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      title: 'Klondike House',
      address: "1111 State Street",
      price: "500",
      url: "assets/Klondike House.jpg",
      location: "Riatta Place",
      isFavorited: true,
      amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}]
      ,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      title: 'Klondike House',
      address: "1111 State Street",
      price: "500",
      url: "assets/Klondike House.jpg",
      location: "Riatta Place",
      isFavorited: false,
      amentities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      title: 'Klondike House',
      address: "1111 State Street",
      price: "500",
      url: "assets/Klondike House.jpg",
      location: "Riatta Place",
      isFavorited: false,
      amentities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      title: 'Klondike House',
      address: "1111 State Street",
      price: "500",
      url: "assets/Klondike House.jpg",
      location: "Riatta Place",
      isFavorited: true,
      amentities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      title: 'Klondike House',
      address: "1111 State Street",
      price: "500",
      url: "assets/Klondike House.jpg",
      location: "Riatta Place",
      isFavorited: false,
      amentities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  postedSubleases = [{
    id: "0",
    address: "1111 State Street",
    title: 'Klondike House', url: 'assets/Klondike House.jpg', price: "500", location: "Riatta Place",
    amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
      title: 'Fitness Center',
      url: "fit-center"
    }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
      title: "Free Laundry",
      url: "laundry"
    }],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
    {
      id: "0",
      address: "1111 State Street",
      title: 'Klondike House', price: "500", url: 'assets/Klondike House.jpg', location: "Riatta Place",
      amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      address: "1111 State Street",
      title: 'Grant Street Station', price: "500", url: "assets/South Street Station.jpg", location: "Riatta Place",
      amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: "0",
      address: "1111 State Street",
      title: 'Grant Street Station', price: "500", url: "assets/South Street Station.jpg", location: "Riatta Place",
      amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
        title: 'Fitness Center',
        url: "fit-center"
      }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
        title: "Free Laundry",
        url: "laundry"
      }, {title: "Parking Lot", url: "lot"},
        {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
          title: "Basketball Court",
          url: "basketball"
        }, {title: "Tennis Court", url: "tennis"}],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  profile: User;

  constructor() {

  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') != null) {
      this.profile = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}
