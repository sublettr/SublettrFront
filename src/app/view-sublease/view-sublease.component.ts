import { Component, OnInit } from '@angular/core';
import {SubleaseService} from "../_services/sublet.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Sublease} from "../_models/sublease";
import {DataService} from "../_services/DataService";
import {UserTrackingService} from "../_services/UserTrackingService";
import {FullUser} from "../_models/full-user";

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
  amenities: [{title: 'Electric', url: "electric"}, {title: 'Water', url: "water"}, {
    title: 'Fitness Center',
    url: "fit-center"
  }, {title: 'Free Parking', url: "parking"}, {title: 'Garage', url: "garage"}, {
    title: "Free Laundry",
    url: "laundry"
  }],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};
  private isLoggedIn: boolean;

  constructor(private userTrackingService: UserTrackingService, private subleaseService : SubleaseService, private route : ActivatedRoute, private router : Router, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number.parseInt(params['id']);
      console.log("ID: " + id);
      this.loadSublease(id);
    });
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }


  //Get all subleases for the front page
  loadSublease(id : number) {
    this.subleaseService.getFullById(id)
      .subscribe(
        data => {
          this.sublet = data;
          console.log(this.sublet);
        },
        error => {
          console.log("Getting sublets issue " + error);
        }
      );
  }

  edit(): void {
    this.dataService.post = this.sublet;
    this.router.navigate(["post"]);
  }
}
