import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Sublease} from "../_models/sublease";
import {SubleaseService} from "../_services/sublet.service";
import {FullUser} from "../_models/full-user";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../_services/DataService";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  amenities = [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
    title: 'Fitness Center',
    url: "fit-center"
  }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
    title: "Free Laundry",
    url: "laundry"
  }, {title: "Parking Lot", url: "lot"},
    {title: "Indoor Pool", url: "in-pool"}, {title: "Outdoor Pool", url: "out-pool"}, {
      title: "Basketball Court",
      url: "basketball"
    }, {title: "Tennis Court", url: "tennis"}];

  isLoggedIn: boolean = false;
  currentUser: FullUser = new FullUser("");

  post: Sublease;

  constructor(private subleaseService: SubleaseService, private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    this.post = this.dataService.post;
    if (this.post == undefined) {
      this.post = {
        "id": 0,
        "email": this.currentUser.email,
        "address": "",
        "description": "",
        "hasRoommates": false,
        "roommates": 0,
        "hasOpenHouse": false,
        "openHouse": "",
        "isFurnished": false,
        "tags": []
      }
    }

    if (this.post.roommates > 0) {
      this.post.hasRoommates = true;
    }

    if (this.post.openHouse != "") {
      this.post.hasOpenHouse = true;
    }
    console.log("Post " + JSON.stringify(this.post));

  }

  submitForm() {
    // let sublet = new Sublease(0, 26, this.post.address1 + " " + this.post.address2, "",
    //   this.post.roommates, this.post.isFurnished, this.post.openHouse, ["test"]);
    this.subleaseService.create(this.post)
      .subscribe(
        data => {
          console.log("Successful post upload")
        },
        error => {
          console.log("Post upload " + error);
        }
      )
  }

  updateForm() {
    // let sublet = new Sublease(0, 26, this.post.address1 + " " + this.post.address2, "",
    //   this.post.roommates, this.post.isFurnished, this.post.openHouse, ["test"]);
    this.subleaseService.updatePost(this.post)
      .subscribe(
        data => {
          this.router.navigate(["view-sublease/"+this.post.id]);

          console.log("Successful post update")
        },
        error => {
          console.log("Post update issue " + error);
        }
      )
  }

}
