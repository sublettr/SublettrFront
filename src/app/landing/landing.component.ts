import {Component, OnInit, Inject, Input, Output, EventEmitter} from '@angular/core';
import {SubleaseService} from "../_services/sublet.service";
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";
import {FullUser} from "../_models/full-user";
import {Sublease} from "../_models/sublease";
import {DataService} from "../_services/DataService";
import {LandingFilter} from "../_models/landing-filter";

@Component({
  selector: 'app-landing',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public subleases;
  public sublets;
  sidebar = true;
  isLoggedIn: boolean;
  currentUser: FullUser;

  landingFilter: LandingFilter;

  constructor(private router: Router, private subleaseService: SubleaseService) {
    this.subleases = [{
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
        title: 'Klondike House', price: "500", url: "assets/Klondike House.jpg", location: "Riatta Place",
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
        title: 'Klondike House', price: "500", url: "assets/Klondike House.jpg", location: "Riatta Place",
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
        title: 'Klondike House', price: "500", url: "assets/Klondike House.jpg", location: "Riatta Place",
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
        title: 'Klondike House', price: "500", url: "assets/Klondike House.jpg", location: "Riatta Place",
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
        title: 'Klondike House',
        price: "500",
        url: "assets/Klondike House.jpg",
        location: "Riatta Place",
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
        title: 'Klondike House',
        price: "500",
        url: "assets/Klondike House.jpg",
        location: "Riatta Place",
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
        title: 'Klondike House',
        price: "500",
        url: "assets/Klondike House.jpg",
        location: "Riatta Place",
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
        title: 'Klondike House',
        price: "500",
        url: "assets/Klondike House.jpg",
        location: "Riatta Place",
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
        title: 'Klondike House',
        price: "500",
        url: "assets/Klondike House.jpg",
        location: "Riatta Place",
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
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    this.landingFilter = new LandingFilter([500, 899], 5, [{label: 'tag1', value: 'tag1'}, {
      label: 'tag2',
      value: 'tag2'
    }, {label: 'tag3', value: 'tag3'}, {label: 'tag4', value: 'tag4'}, {label: 'tag5', value: 'tag5'}], []);
    this.loadAllSubleases();
  }

  routePostSublease() {
    this.router.navigateByUrl('/post');
  }

  //Get all subleases for the front page
  loadAllSubleases() {
    this.subleaseService.getAll()
      .subscribe(
        data => {
          this.sublets = data;
        },
        error => {
          console.log("Getting sublets issue " + error);
        }
      );
  }

  //Favorite a sublease
  favorite(): void {
    // this.http.put("www.xyz.com","user-id","sublease-id", "if the sublease was favorited or unfavorited");
  }

  //Share a sublease
  share(): void {

  }
}
