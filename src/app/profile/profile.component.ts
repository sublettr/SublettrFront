import {Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {User} from "../_models/user";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {UserService} from "../_services/user.service";

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

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') != null) {
      this.profile = JSON.parse(localStorage.getItem('currentUser'));
      console.log("Loaded profile: " + JSON.stringify(this.profile));
    }
  }

  openProfileDialog(): void {
    let profileDialogRef = this.dialog.open(UpdateProfileDialog, {
      width: '500px',
      height: '500px',
      data: this.profile,
    });

    profileDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'app-landing',
  templateUrl: './update-profile-dialog.html',
  styleUrls: ['./profile.component.css']
})
export class UpdateProfileDialog {


  @Input() profile: User;
  @Output() setCurrentUser: EventEmitter<User> = new EventEmitter<User>();

  newUser: User;

  constructor(public profileDialogRef: MatDialogRef<UpdateProfileDialog>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private userService: UserService) {
    this.profile = this.data;
    this.newUser = this.profile;
  }

  onNoClick(): void {
    this.profileDialogRef.close();
  }

  closeDialog() {
    this.profileDialogRef.close();
  }

  updateProfile() {

    console.log("Updating user profile: " + this.newUser);
    if (this.newUser == undefined || this.newUser.username == "") {
      console.log("Invalid user " + this.data);
    }
    console.log("Mapped user: " + JSON.stringify(this.newUser));
    this.userService.update(this.newUser)
      .subscribe(
        data => {
          this.setCurrentUser.emit(this.profile);
          if (this.profile) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(this.profile));

            console.log("Updated User");
            this.closeDialog();
          }
        },
        error => {
          console.log("Updating user issue " + error);
        }
      )
  }
}
