import {Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {FullUser} from "../_models/full-user";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {UserService} from "../_services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import { genders } from '../_models/constants';
import { grades } from '../_models/constants';
import {Sublease} from "../_models/sublease";
import {ImageService} from "../_services/image.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  savedSubleases: Sublease[];
  postedSubleases: Sublease[];

  currentUser: FullUser;
  profile: FullUser;
  email: string;

  constructor(public dialog: MatDialog, private userService: UserService, private imageService: ImageService, private route : ActivatedRoute, private router : Router) {

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
    this.userService.getSavedSubleases(email)
      .subscribe(data => {
          if (data != undefined) {
            this.savedSubleases = data;
            console.log(data);
          } else {
            console.log("No saved sublets returned.")
          }
        },
        error => {
          console.log("Unable to fetch saved sublets");
        })
  }

  loadPostedSublets(email: string) {
    this.userService.getPostedSubleases(email)
      .subscribe(data => {
          if (data != undefined) {
            this.postedSubleases = data;
            console.log(data);
          } else {
            console.log("No posted sublets returned.")
          }
        },
        error => {
          console.log("Unable to fetch posted sublets");
        })
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

            console.log("Updated FullUser");
            this.closeDialog();
          }
        },
        error => {
          console.log("Updating user issue " + error);
        }
      )
  }
}
