import {Component, OnInit, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA, MdDialog} from "@angular/material";
import {HttpClient} from "@angular/common/http";
import {RequestOptions} from "@angular/http";

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import {SubleaseService} from "../_services/sublet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public subleases;
  public sublets;
  isLoggedIn : boolean;
  currentUser: User;

  constructor(public dialog: MdDialog, private router: Router, private http: HttpClient, private userService: UserService, private subleaseService: SubleaseService) {
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

  logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
  }

  login(id: number, username: string, password: string) {
    this.userService.getById(id)
      .subscribe(
        data => {
          this.currentUser = data;
          if (this.currentUser) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.isLoggedIn = true;
          }
        },
        error => {
          console.log("Login issue " + error);
        }
      )
  }

  openLoginDialog(): void {
    let loginDialogRef = this.dialog.open(LoginDialog, {
      width: '500px',
      height: '500px',
      data: {firstname: "", lastname: "", password: ""}
    });

    loginDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(JSON.stringify(result));
      if (result.username != "" && result.password != "") {
        this.login(result.id, result.username, result.password);
      }
    });
  }

  openRegisterDialog(): void {
    let registerDialogRef = this.dialog.open(RegisterDialog, {
      width: '500px',
      height: '500px',
      data: {firstname: "", lastname: "", password: ""}
    });

    registerDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // if (result.email != "" && result.password != "") {
      //   this.http.get("/api/Account").subscribe(result => {
      //     this.user = result['user'];
      //   });
      // }
    });
  }
}

@Component({
  selector: 'app-landing',
  templateUrl: './login-dialog.html',
  styleUrls: ['./login.component.css']
})
export class LoginDialog {

  constructor(public loginDialogRef: MdDialogRef<LoginDialog>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private http: HttpClient) {
    this.data = {
      id: 1,
      email: "",
      password: ""
    };
  }

  onNoClick(): void {
    this.loginDialogRef.close();
  }

}

@Component({
  selector: 'app-landing',
  templateUrl: './register-dialog.html',
  styleUrls: ['./login.component.css']
})
export class RegisterDialog {

  constructor(
    public registerDialogRef: MdDialogRef<RegisterDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) {
      this.data = {
        name: "",
        email: "",
        pass1: "",
        pass2: ""
      };
    }

  onNoClick(): void {
    this.registerDialogRef.close();
  }

  onRegistrationSubmit() {
    console.log(JSON.stringify(this.data));
  }
}
