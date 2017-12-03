import {Component, OnInit} from '@angular/core';
import {Sublease} from '../_models/sublease';
import {SubleaseService} from '../_services/sublet.service';
import {FullUser} from '../_models/full-user';
import {Router} from '@angular/router';
import {DataService} from '../_services/DataService';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  amenities = [{title: 'Electric', url: 'electric'}, {title: 'Water', url: 'water'}, {
    title: 'Fitness Center',
    url: 'fit-center'
  }, {title: 'Free Parking', url: 'parking'}, {title: 'Garage', url: 'garage'}, {
    title: 'Free Laundry',
    url: 'laundry'
  }, {title: 'Parking Lot', url: 'lot'},
    {title: 'Indoor Pool', url: 'in-pool'}, {title: 'Outdoor Pool', url: 'out-pool'}, {
      title: 'Basketball Court',
      url: 'basketball'
    }, {title: 'Tennis Court', url: 'tennis'}];

  isLoggedIn = false;
  currentUser: FullUser = new FullUser('');

  post: Sublease;

  public postForm: FormGroup;

  constructor(private _fb: FormBuilder, private subleaseService: SubleaseService, public dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    this.post = this.dataService.post;
    if (this.post === undefined) {
      this.post = {
        'id': 0,
        'email': this.currentUser.email,
        'address': '',
        'price': 0,
        'description': '',
        'hasRoommates': false,
        'roommates': [],
        'hasOpenHouse': false,
        'openHouse': '',
        'isFurnished': false,
        'tags': [],
        'imageUrl': '',
      };
    }

    if (this.post.roommates && this.post.roommates.length > 0) {
      this.post.hasRoommates = true;
    }

    if (this.post.openHouse !== '') {
      this.post.hasOpenHouse = true;
    }

    this.postForm = this._fb.group({
      email: [this.post.email],
      address: [this.post.address, [Validators.required]],
      description: [this.post.description],
      price: [this.post.price],
      hasRoommates: [this.post.hasRoommates],
      roommates: this._fb.array([]),
      hasOpenHouse: [this.post.hasOpenHouse],
      openHouse: [''],
      isFurnished: [this.post.isFurnished],
      tags: [],
      imageUrl: ''
    });

    // Add roommates
    this.initRoommates();

    if (this.post.openHouse !== '') {
      this.post.hasOpenHouse = true;
    }
    console.log('Post ' + JSON.stringify(this.post));
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
    console.log(this.post);
    const formModel = model.getRawValue();
    formModel.imageUrl = '';
    const imageList: FileList = (<HTMLInputElement>document.querySelector('input[name="subletImage"]')).files;

    formModel.email = this.post.email;
    formModel.tags = this.post.tags;
    formModel.roommates.forEach(roommate => {
      console.log(roommate);
      roommate.id = 0;
      roommate.subletID = 0;
    });
    console.log('Uploading: ' + JSON.stringify(formModel));

    this.subleaseService.create(formModel, imageList)
      .subscribe(
      data => {
        this.router.navigate([`view-sublease/${data}}`]);
        console.log('Successful post');
      },
      error => {
        console.log(`Post update issue: ${error}`);
      });
  }

  updateForm(model) {
    const formModel = model.getRawValue();
    formModel.id = this.post.id;
    formModel.email = this.post.email;
    formModel.email = this.post.email;
    formModel.tags = this.post.tags;
    formModel.imageUrl = this.post.imageUrl;
    formModel.price = this.post.price;

    const imageList: FileList = (<HTMLInputElement>document.querySelector('input[name="subletImage"]')).files;
    console.log('Updating: ' + JSON.stringify(formModel));
    this.subleaseService.updatePost(formModel, imageList)
      .subscribe(
      data => {
        formModel.imageUrl = data.imageUrl;
        this.router.navigate(['view-sublease/' + this.post.id]);

        console.log('Successful post update');
      },
      error => {
        console.log('Post update issue ' + error);
      });
  }

}
