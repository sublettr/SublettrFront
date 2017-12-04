import {Component, OnInit} from "@angular/core";
import {SubleaseService} from "../_services/sublet.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Sublease} from "../_models/sublease";
import {DataService} from "../_services/DataService";
import {UserTrackingService} from "../_services/UserTrackingService";
import {FullUser} from "../_models/full-user";
import {ImageService} from "../_services/image.service";
import {ShareDialog} from "../_classes/share";
import {MatDialog} from "@angular/material";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-view-sublease',
  templateUrl: './view-sublease.component.html',
  styleUrls: ['./view-sublease.component.css']
})
export class ViewSubleaseComponent implements OnInit {

  sublet: Sublease;
  currentUser: FullUser;

  sublease = {
    title: 'Klondike House', url: 'assets/Klondike House.jpg', price: "500", location: "Riatta Place",
    amenities: [{ title: 'Electric', url: "electric" }, { title: 'Water', url: "water" }, {
      title: 'Fitness Center',
      url: "fit-center"
    }, { title: 'Free Parking', url: "parking" }, { title: 'Garage', url: "garage" }, {
      title: "Free Laundry",
      url: "laundry"
    }],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };
  private isLoggedIn: boolean;

  private postID: number;
  private savedPost: boolean;

  private rated: boolean;
  private rating: number = -1;

  opened: Boolean = false;
  toggle(roommateLength: number) {
    if (roommateLength > 0) {
      this.opened = !this.opened;
    }
  }

  subletError: Boolean;

  constructor(private userTrackingService: UserTrackingService, private subleaseService: SubleaseService, private route: ActivatedRoute, private router: Router, private dataService: DataService, public userService: UserService, private imageService: ImageService, private dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postID = Number.parseInt(params['id']);
      console.log("ID: " + this.postID);
      this.loadSublease(this.postID);
    });
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.loadSavedSublets(this.currentUser.email);
    }

  }


  //Get all subleases for the front page
  loadSublease(id: number) {
    this.subleaseService.getFullById(id)
      .subscribe(
      data => {
        this.sublet = data;
        this.rating = this.sublet.rating;
        this.subletError = false;
      },
      error => {
        console.log("Getting sublets issue " + error);
        this.subletError = true;
      }
      );
  }

  loadSavedSublets(email: string) {
    this.userService.getSavedSubleases(email)
      .subscribe(data => {
          if (data != undefined) {
            let savedSublets = data;
            this.savedPost = savedSublets.some(x => x.id === this.postID)
          } else {
            console.log("No saved sublets returned.")
          }
        },
        error => {
          console.log("Unable to fetch saved sublets");
        })
  }

  edit(): void {
    this.dataService.post = this.sublet;
    this.router.navigate(["post"]);
  }

  rate(rating: number) {
    console.log("Rate " + rating + " " + this.sublet.rating);
    this.sublet.rating = this.rating;
    this.rating = rating;
    this.subleaseService.rate(this.sublet.id, rating).subscribe(
      data => {
        this.rated = true;
      },
      error => {
        console.log("Unable to rate sublet. " + error);
      }
    )
  }

  //Favorite a sublease
  favorite(id: number): void {
    console.log("Saving " + id + " " + this.currentUser.email);
    this.subleaseService.saveSublease(this.currentUser.email, id).subscribe(
      data => {
        this.savedPost = !this.savedPost;
        console.log('Returned: ' + data);
      },
      error => {
        console.log('Favoriting issue ' + error);
      }
    )
  }

  //Share a sublease
  share(): void {
    let shareDialogRef = this.dialog.open(ShareDialog, {
      width: '500px',
      height: '200px',
      data: {firstname: "", lastname: "", password: ""}
    });

    shareDialogRef.afterClosed().subscribe(result => {
      console.log('The shared dialog was closed');
    });
  }
}
