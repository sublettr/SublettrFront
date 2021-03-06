import {Component, OnInit} from '@angular/core';
import {SubleaseService} from '../_services/sublet.service';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';
import {FullUser} from '../_models/full-user';
import {Sublease} from '../_models/sublease';
import {DataService} from '../_services/DataService';
import {ImageService} from '../_services/image.service';
import {LandingFilter} from '../_models/landing-filter';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-landing',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public subleases;
  isLoggedIn: boolean;
  currentUser: FullUser;

  landingFilter: LandingFilter;

  savedSublets: Sublease[];

  subletsError: boolean;

  pullingSublets: boolean;

  sortBy: string;

  constructor(private router: Router, public dataService: DataService, public userService: UserService, private subleaseService: SubleaseService, private imageService: ImageService) {
    this.subleases = [{
      title: 'Klondike House', url: 'assets/Klondike House.jpg', price: '500', location: 'Riatta Place',
      amenities: [{title: 'Electric', url: 'electric'}, {title: 'Water', url: 'water'}, {
        title: 'Fitness Center',
        url: 'fit-center'
      }, {title: 'Free Parking', url: 'parking'}, {title: 'Garage', url: 'garage'}, {
        title: 'Free Laundry',
        url: 'laundry'
      }],
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
    ];
    this.sortBy = 'none';
  }

  ngOnInit() {

    this.dataService.sidebar = true;

    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.loadSavedSublets(this.currentUser.email);
    }

    this.landingFilter = new LandingFilter([0, 2000], [0, 5], [{label: 'tag1', value: 'tag1'}, {
      label: 'tag2',
      value: 'tag2'
    }, {label: 'tag3', value: 'tag3'}, {label: 'tag4', value: 'tag4'}, {label: 'tag5', value: 'tag5'}], []);
    this.loadAllSubleases();
    this.loadAllTags();
  }

  routePostSublease() {
    this.router.navigateByUrl('/post');
  }

  // Get all subleases for the front page
  loadAllSubleases() {
    this.pullingSublets = true;
    this.subleaseService.getAll()
      .subscribe(
        data => {
          this.pullingSublets = false;
          this.dataService.sublets = data;
          this.subletsError = false;
        },
        error => {
          this.pullingSublets = false;
          console.log('Getting sublets issue ' + error);
          this.subletsError = true;
        }
      );
  }

  loadAllTags() {
    this.subleaseService.getTags()
      .subscribe(
        data => {
          const newTags = data
            .map((oldTag) => {
              delete oldTag.isAmen;
              return {label: oldTag.tag, value: oldTag.tag};
            });
            console.log(newTags);
          this.landingFilter = new LandingFilter([0, 2000], [0, 5], newTags, []);
          console.log('Tags: ' + JSON.stringify(this.landingFilter.tagFilter));

        },
        error => {
          console.log('Getting tags issue ' + error);
        }
      );
  }

  loadSavedSublets(email: string) {
    this.userService.getSavedSubleases(email)
      .subscribe(data => {
          if (data !== undefined) {
            this.savedSublets = data;
          } else {
            console.log('No saved sublets returned.');
          }
        },
        error => {
          console.log('Unable to fetch saved sublets');
        });
  }

  isPostSaved(postID: number): boolean {
    if (!this.savedSublets) {
      return false;
    }
    return this.savedSublets.some(x => x.id === postID);
  }

  // Favorite a sublease
  favorite(sublease: Sublease): void {
    this.subleaseService.saveSublease(this.currentUser.email, sublease.id).subscribe(
      data => {
        console.log('Returned: ' + data);
        const index = this.savedSublets.indexOf(sublease);
        if (index !== -1) {
          this.savedSublets.splice(index, 1);
          this.dataService.msgs = [{severity: 'info', summary: 'Successfully Removed Favorite', detail: 'You removed ' + sublease.address + ' from your favorites.'}];
        } else {
          this.savedSublets.push(sublease);
          this.dataService.msgs = [{severity: 'info', summary: 'Successfully Favorited', detail: 'You added ' + sublease.address + ' to your favorites.'}];
        }
      },
      error => {
        console.log('Favoriting issue ' + error);
        this.dataService.msgs = [{severity: 'error', summary: 'Favoriting Failed', detail: 'Favoriting failed'}];
      }
    );
  }

  applyFilters(cost: number[], rating: number[], tags: string[]): void {
    console.log('cost: ' +  cost);
    console.log('rating: ' +  rating);
    console.log('tags: ' + tags);
    this.pullingSublets = true;
    this.subleaseService.getFilteredResults(cost, rating, tags)
      .subscribe(
        data => {
          this.dataService.sublets = data;
          this.subletsError = false;
          this.pullingSublets = false;
        },
        error => {
          console.log('Getting sublets issue ' + error);
          this.subletsError = true;
          this.pullingSublets = false;
        }
      );
  }

  resetFilters(): void {
    this.landingFilter.resetFilter();
    this.loadAllSubleases();
  }
}
