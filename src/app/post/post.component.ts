import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  amenities = [{title:'Electric', url: "electric"}, {title:'Water', url:"water"}, {title:'Fitness Center', url:"fit-center"}, {title:'Free Parking', url:"parking"}, {title:'Garage', url:"garage"}, {title:"Free Laundry", url:"laundry"}, {title:"Parking Lot", url:"lot"},
    {title:"Indoor Pool", url:"in-pool"}, {title:"Outdoor Pool", url: "out-pool"}, {title:"Basketball Court", url:"basketball"}, {title:"Tennis Court", url:"tennis"}];


  constructor() {
  }

  ngOnInit() {
  }

}
