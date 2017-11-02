import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Sublease} from "../_models/sublease";
import {SubleaseService} from "../_services/sublet.service";
import {FullUser} from "../_models/full-user";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  amenities = [{title:'Electric', url: "electric"}, {title:'Water', url:"water"}, {title:'Fitness Center', url:"fit-center"}, {title:'Free Parking', url:"parking"}, {title:'Garage', url:"garage"}, {title:"Free Laundry", url:"laundry"}, {title:"Parking Lot", url:"lot"},
    {title:"Indoor Pool", url:"in-pool"}, {title:"Outdoor Pool", url: "out-pool"}, {title:"Basketball Court", url:"basketball"}, {title:"Tennis Court", url:"tennis"}];

  isLoggedIn: boolean = false;
  currentUser: FullUser = new FullUser("");

  post: any = {};


  constructor(private subleaseService: SubleaseService) {
    this.post = {
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "zipcode": 0,
        "property": "",
        "location": "",
        "hasRoommates": false,
        "roommates": 0,
        "hasOpenHouse": false,
        "openHouse": "",
        "isFurnished": false
    }
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
    let sublet = new Sublease(0, 26, this.post.address1 + " " + this.post.address2, "",
      this.post.roommates, this.post.isFurnished, this.post.openHouse, ["test"]);
    this.subleaseService.create(sublet)
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
