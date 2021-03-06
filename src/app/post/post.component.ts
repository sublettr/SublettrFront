import {Component, OnInit} from '@angular/core';
import {Sublease} from '../_models/sublease';
import {SubleaseService} from '../_services/sublet.service';
import {FullUser} from '../_models/full-user';
import {Router} from '@angular/router';
import {DataService} from '../_services/DataService';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {ImageService} from '../_services/image.service';
import {genders} from '../_models/constants';
import {grades} from '../_models/constants';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  grades = grades;
  sex = genders;

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
  selectedImage: SafeUrl;
  public postForm: FormGroup;

  constructor(private _fb: FormBuilder, private subleaseService: SubleaseService,
              public dataService: DataService, private router: Router, private sanitizer: DomSanitizer, private imageService: ImageService) {

  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    this.post = this.dataService.post;
    if (this.post) {
      if (this.post.roommates && this.post.roommates.length > 0) {
        this.post.hasRoommates = true;
      }

      if (this.post.openHouse !== '') {
        this.post.hasOpenHouse = true;
      }
    }
    if (this.post === undefined) {
      this.post = {
        'id': 0,
        'email': this.currentUser.email,
        'address': '',
        'price': 0,
        'rating': 0,
        'ratingTotal': 0,
        'ratingNumber': 5,
        'description': '',
        'hasRoommates': false,
        'roommates': [],
        'hasOpenHouse': false,
        'openHouse': Date.now(),
        'isFurnished': false,
        'tags': [],
        'imageUrl': '',
      };
    }

    this.postForm = this._fb.group({
      email: [this.post.email],
      address: [this.post.address, [Validators.required]],
      description: [this.post.description],
      price: [this.post.price],
      rating: [this.post.rating],
      hasRoommates: [this.post.hasRoommates],
      roommates: this._fb.array([]),
      hasOpenHouse: [this.post.hasOpenHouse],
      openHouse: [new Date(this.post.openHouse)],
      isFurnished: [this.post.isFurnished],
      tags: [this.post.tags],
      imageUrl: ['']
    });

    // Add roommates
    this.initRoommates();

    if (this.post.openHouse !== '') {
      this.post.hasOpenHouse = true;
    }

    if (this.post.imageUrl) {
      this.selectedImage = this.post.imageUrl;
    }

    console.log('Post ' + JSON.stringify(this.post));
  }

  initRoommates() {
    if (this.post.hasRoommates) {
      for (let roommate of this.post.roommates) {
        const control = <FormArray>this.postForm.controls['roommates'];
        control.push(
          this._fb.group({
            age: [roommate.age, Validators.required],
            grade: [roommate.grade, Validators.required],
            sex: [roommate.sex, Validators.required],
            major: [roommate.major]
          }));
      }
    } else {
      // initialize our address
      return this._fb.group({
        age: ['', Validators.required],
        grade: ['', Validators.required],
        sex: ['', Validators.required],
        major: ['']
      });
    }
  }


  addRoommate() {
    // add address to the list
    const control = <FormArray>this.postForm.controls['roommates'];
    control.push(this._fb.group({
      age: ['', Validators.required],
      grade: ['', Validators.required],
      sex: ['', Validators.required],
      major: ['']
    }));
  }

  removeRoommate(i: number) {
    // remove address from the list
    const control = <FormArray>this.postForm.controls['roommates'];
    control.removeAt(i);
  }

  updateImgPreview($event) {
    if ($event.target.files) {
      this.selectedImage = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL($event.target.files[0]));
    }
  }

  submitForm(model) {
    // let sublet = new Sublease(0, 26, this.post.address1 + " " + this.post.address2, "",
    //   this.post.roommates, this.post.isFurnished, this.post.openHouse, ["test"]);
    const formModel = model.getRawValue();
    formModel.imageUrl = '';
    const imageList: FileList = (<HTMLInputElement>document.getElementById('inputSubletImage')).files;

    formModel.email = this.post.email;
    formModel.openHouse = formModel.openHouse.toLocaleString();
    formModel.roommates.forEach(roommate => {
      console.log(roommate);
      roommate.id = 0;
      roommate.subletID = 0;
    });
    console.log('Uploading: ' + JSON.stringify(formModel));

    this.subleaseService.create(formModel, imageList)
      .subscribe(
        data => {
          this.dataService.msgs = [{severity:'info', summary:'Successfully Added Post', detail:'Added post with id: ' + data}];
          this.router.navigate([`view-sublease/${data}}`]);
          console.log('Successful post');
        },
        error => {
          console.log(`Post update issue: ${error}`);
          this.dataService.msgs = [{severity:'error', summary:'Issue Posting', detail:'Posting failed. Check the data or wait until our server can fix it.'}];
        });
  }

  updateForm(model) {
    const formModel = model.getRawValue();
    formModel.id = this.post.id;
    formModel.imageUrl = this.post.imageUrl;
    formModel.openHouse = formModel.openHouse.toLocaleString();

    const imageList: FileList = (<HTMLInputElement>document.getElementById('inputSubletImage')).files;
    this.subleaseService.updatePost(formModel, imageList)
      .subscribe(
        data => {
          formModel.imageUrl = data.imageUrl;
          this.router.navigate(['view-sublease/' + this.post.id]);
          this.dataService.msgs = [{severity:'info', summary:'Successfully Updated Post', detail:'Updated post with id: ' + this.post.id}];
          console.log('Successful post update');
        },
        error => {
          console.log('Post update issue ' + error);
          this.dataService.msgs = [{severity:'error', summary:'Issue Updating Post', detail:'Post updating failed on post id: ' + this.post.id}];
        });
  }

}
