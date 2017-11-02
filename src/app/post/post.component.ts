import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Sublease} from "../_models/sublease";
import {SubleaseService} from "../_services/sublet.service";
import {User} from "../_models/user";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  amenities = [{title:'Electric', url: "electric"}, {title:'Water', url:"water"}, {title:'Fitness Center', url:"fit-center"}, {title:'Free Parking', url:"parking"}, {title:'Garage', url:"garage"}, {title:"Free Laundry", url:"laundry"}, {title:"Parking Lot", url:"lot"},
    {title:"Indoor Pool", url:"in-pool"}, {title:"Outdoor Pool", url: "out-pool"}, {title:"Basketball Court", url:"basketball"}, {title:"Tennis Court", url:"tennis"}];

  isLoggedIn: boolean = false;
  currentUser: User = new User("");

  post: any = {};
  sublet: Sublease;


  constructor(private subleaseService: SubleaseService) {
  }

  ngOnInit() {
      if (localStorage.getItem('currentUser') == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  submitForm() {
    this.sublet = new Sublease(0, this.currentUser.id, this.post.address1 + " " + this.post.address2,  this.post.description,
      this.post.roommates, this.post.isFurnished, this.post.openHouse, ["test"]);
    this.subleaseService.create(this.sublet)
      .subscribe(
        data => {
          console.log("Successful post upload")
        },
        error => {
          console.log("Login issue " + error);
        }
      )
  }

}
