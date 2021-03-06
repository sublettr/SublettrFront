import {Component, OnInit, Input, Output, EventEmitter, Inject} from "@angular/core";
import {FullUser} from "../_models/full-user";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {UserService} from "../_services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {genders, grades} from "../_models/constants";
import {Sublease} from "../_models/sublease";
import {ImageService} from "../_services/image.service";
import {SubleaseService} from "../_services/sublet.service";
import {DataService} from "../_services/DataService";
import {ConfirmationService} from "primeng/components/common/confirmationservice";
import {Message} from "primeng/components/common/message";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  savedSubleases: Sublease[];
  postedSubleases: Sublease[];

  msgs: Message[] = [];

  private pullingFavoritedSublets: boolean;
  private pullingPostedSublets: boolean;


  subleaseSamples = [{
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
    }];

  currentUser: FullUser;
  profile: FullUser;
  email: string;

  grades = grades;

  constructor(public dialog: MatDialog,
              private confirmationService: ConfirmationService,
              private userService: UserService,
              private subleaseService: SubleaseService,
              private dataService: DataService,
              private imageService: ImageService,
              private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') != null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log("Loaded profile: " + JSON.stringify(this.profile));
    }
    this.route.params.subscribe(params => {
      this.email = params['email'];
      console.log("Email: " + this.email);
      if (this.currentUser && this.email == this.currentUser.email) {
        this.profile = this.currentUser
        this.loadSavedSublets(this.profile.email);
        this.loadPostedSublets(this.profile.email)
      } else {
        this.loadProfile(this.email);
      }
    });
  }

  loadProfile(email: string) {
    this.userService.getFullByEmail(email)
      .subscribe(data => {
          if (data != undefined) {
            this.profile = data;
            this.loadPostedSublets(this.profile.email)
          } else {
            console.log("No data returned.")
          }
        },
        error => {
          console.log("Unable to fetch user");
        })
  }

  loadSavedSublets(email: string) {
    this.pullingFavoritedSublets = true;
    this.userService.getSavedSubleases(email)
      .subscribe(data => {
          if (data != undefined) {
            this.savedSubleases = data;
          } else {
            console.log("No saved sublets returned.")
          }
          this.pullingFavoritedSublets = false;
        },
        error => {
          console.log("Unable to fetch saved sublets");
          this.pullingFavoritedSublets = false;
        })
  }

  loadPostedSublets(email: string) {
    this.pullingPostedSublets = true;
    this.userService.getPostedSubleases(email)
      .subscribe(data => {
          if (data != undefined) {
            this.postedSubleases = data;
          } else {
            console.log("No posted sublets returned.")
          }
          this.pullingPostedSublets = false;
        },
        error => {
          console.log("Unable to fetch posted sublets");
          this.pullingPostedSublets = false;
        })
  }

  //Favorite a sublease
  favorite(id: number, index: number): void {
    this.subleaseService.saveSublease(this.currentUser.email, id).subscribe(
      data => {
        this.savedSubleases.splice(index, 1);
      },
      error => {
        console.log('Favoriting issue ' + error);
      }
    )
  }

  editPost(sublease: Sublease): void {
    this.dataService.post = sublease;
    this.router.navigate(["post"]);
  }

  public confirmDelete(subleaseID: number, index: number) {
    console.log('Displaying delete confirmation box');
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.deletePost(subleaseID, index);
      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'Canceling Deletion of Sublease'}];
      }
    });
  }

  deletePost(subleaseID: number, index: number): void {
    console.log('Deleting ' + subleaseID);
    this.subleaseService.delete(subleaseID).subscribe(
      data => {
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'Sublease deleted'}];
        this.postedSubleases.splice(index, 1);
        this.savedSubleases = this.savedSubleases.filter(sublease => sublease.id !== subleaseID);
      },
      error => {
        this.msgs = [{severity:'error', summary:'Confirmed', detail:'A deletion error has occured' + error}];
        console.log('An error has occurred while deleting ' + error);
      }
    )
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


  @Input() profile: FullUser;
  @Output() setCurrentUser: EventEmitter<FullUser> = new EventEmitter<FullUser>();

  newUser: FullUser;

  sex = genders;
  grades = grades;

  constructor(public profileDialogRef: MatDialogRef<UpdateProfileDialog>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private userService: UserService,
              private dataService: DataService) {
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
    if (this.newUser == undefined || this.newUser.userName == "") {
      console.log("Invalid user " + this.data);
    }
    console.log("Mapped user: " + JSON.stringify(this.newUser));
    this.userService.updateProfile(this.newUser)
      .subscribe(
        data => {
          this.setCurrentUser.emit(this.profile);
          if (this.profile) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(this.profile));

            console.log("Updated User Information: " + JSON.stringify(this.profile));
            this.dataService.msgs = [{severity:'info', summary:'Profile Edited', detail:'You edited your profile.'}];
            this.closeDialog();
          }
        },
        error => {
          console.log("Updating user issue " + error);
          this.dataService.msgs = [{severity:'error', summary:'Error Editing Profile', detail:'Check your profile data.'}];
        }
      )
  }
}
