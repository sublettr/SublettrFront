import {Component, Input, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Sublease} from "../_models/sublease";
import {SubleaseService} from "../_services/sublet.service";
import {FullUser} from "../_models/full-user";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../_services/DataService";
import {ChipsModule} from 'primeng/primeng';
import {FormGroup, FormBuilder, Validators, FormArray} from "@angular/forms";

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

  tag_chips: string[] = [];

  post: Sublease;

  public postForm: FormGroup;

  constructor(private _fb: FormBuilder, private subleaseService: SubleaseService, private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    this.postForm = this._fb.group({
      address: ['', [Validators.required]],
      description: [''],
      hasRoommates: [false],
      roommates: this._fb.array([]),
      hasOpenHouse: [false],
      openHouse: [''],
      isFurnished: [false]
    });

    this.initRoommates(); //Add roommates

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
        "roommates": [],
        "hasOpenHouse": false,
        "openHouse": "",
        "isFurnished": false,
        "tags": this.tag_chips,
        "imageUrls": []
      }
    }

    if (this.post.roommates.length > 0) {
      this.post.hasRoommates = true;
    }

    if (this.post.openHouse != "") {
      this.post.hasOpenHouse = true;
    }
    console.log("Post " + JSON.stringify(this.post));

  }

initRoommates() {
  // initialize our address
  return this._fb.group({
    age: ['', Validators.required],
    grade: ['', Validators.required],
    sex: ['', Validators.required],
    major: ['']
  });
}


addRoommate() {
    // add address to the list
    const control = <FormArray>this.postForm.controls['roommates'];
    control.push(this.initRoommates());
  }

  removeRoommate(i: number) {
    // remove address from the list
    const control = <FormArray>this.postForm.controls['roommates'];
    control.removeAt(i);
  }

  submitForm(model) {
    // let sublet = new Sublease(0, 26, this.post.address1 + " " + this.post.address2, "",
    //   this.post.roommates, this.post.isFurnished, this.post.openHouse, ["test"]);
   this.post.tags = this.tag_chips;
    console.log(this.post);
    const imageList: FileList = (<HTMLInputElement>document.querySelector('.photo-upload input')).files;
    for(let i: number = 0; i < imageList.length; i++) {
      this.post.imageUrls.push(`https://s3.amazonaws.com/sublettr-images/${this.post.email}-${this.post.address}//file.name`);
    }
    this.subleaseService.create(this.post, imageList)
    let formModel = model.getRawValue();
    formModel.email = this.post.email;
    formModel.tags = this.post.tags;
    formModel.imageUrls = [];
    formModel.roommates.forEach(roommate => {
      console.log(roommate);
      roommate.id = 0;
      roommate.subletID = 0;
    });
    console.log("Uploading: " + JSON.stringify(formModel));
    this.subleaseService.create(formModel)
      .subscribe(
        data => {
          console.log("Successful post upload")
        },
        error => {
          console.log("Post upload " + error);
        }
      )
  }

  updateForm(model) {
    // let sublet = new Sublease(0, 26, this.post.address1 + " " + this.post.address2, "",
    //   this.post.roommates, this.post.isFurnished, this.post.openHouse, ["test"]);
    this.post.tags = this.tag_chips;
    // this.subleaseService.updatePost(this.post)
    let formModel = model.getRawValue();
    formModel.email = this.post.email;
    formModel.tags = this.post.tags;

    console.log("Updating: " + formModel);
    this.subleaseService.updatePost(formModel)
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
