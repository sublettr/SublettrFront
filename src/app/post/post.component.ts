import { Component, OnInit } from '@angular/core';
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  amenities = [{title:'Electric', url: "electric"}, {title:'Water', url:"water"}, {title:'Fitness Center', url:"fit-center"}, {title:'Free Parking', url:"parking"}, {title:'Garage', url:"garage"}, {title:"Free Laundry", url:"laundry"}, {title:"Parking Lot", url:"lot"},
    {title:"Indoor Pool", url:"in-pool"}, {title:"Outdoor Pool", url: "out-pool"}, {title:"Basketball Court", url:"basketball"}, {title:"Tennis Court", url:"tennis"}];


  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon(
      'water',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/water.svg')
      ).addSvgIcon(
      'electric',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/electric.svg')
    ).addSvgIcon(
      'fit-center',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/fitness-center.svg')
    ).addSvgIcon(
      'parking',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/parking.svg')
    ).addSvgIcon(
      'garage',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/garage.svg')
    ).addSvgIcon(
      'laundry',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/washing-machine.svg')
    ).addSvgIcon(
      'lot',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/lot.svg')
    ).addSvgIcon(
      'in-pool',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/pool.svg')
    ).addSvgIcon(
      'out-pool',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/pool.svg')
    ).addSvgIcon(
      'basketball',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/court.svg')
    ).addSvgIcon(
      'tennis',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/tennis.svg')
    )
  }

  ngOnInit() {
  }

}
