import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {LoginDialog} from './_classes/login';
import {RegisterDialog} from './_classes/register';
import {FullUser} from './_models/full-user';
import {UserService} from './_services/user.service';
import {User} from './_models/user';
import {DataService} from './_services/DataService';
import {routerAnimation} from './_anims/anim-route';
import {ChatExampleData} from './_data/sample-messages';
import {ThreadsService} from './_services/thread.service';
import {MessagesService} from './_services/message.service';
import {SubleaseService} from './_services/sublet.service';
import {Message} from './_models/message';
import {Message as PrimengMessage} from "primeng/components/common/message";
import {Thread} from './_models/thread';
import * as _ from 'lodash';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerAnimation]
})

export class AppComponent implements OnInit {
  title = 'app';

  searchQuery: string;
  isLoggedIn = false;
  currentUser: FullUser;

  unreadMessagesCount: number;

  loginDialogRef: MatDialogRef<LoginDialog>;

  msgs: PrimengMessage[] = [];


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog,
              private router: Router,
              public dataService: DataService,
              public userService: UserService,
              public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public subleaseService: SubleaseService  ) {
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
    );
    ChatExampleData.init(messagesService, threadsService, userService);
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    this.messagesService.messages
      .combineLatest(
        this.threadsService.currentThread,
        (messages: Message[], currentThread: Thread) =>
          [currentThread, messages] )

      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount =
          _.reduce(
            messages,
            (sum: number, m: Message) => {
              const messageIsInCurrentThread: boolean = m.thread &&
                currentThread &&
                (currentThread.id === m.thread.id);
              // note: in a "real" app you should also exclude
              // messages that were authored by the current user b/c they've
              // already been "read"
              if (m && !m.isRead && !messageIsInCurrentThread) {
                sum = sum + 1;
              }
              return sum;
            },
            0);
      });
  }

  // change the animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

  openLoginDialog(): void {
    this.loginDialogRef = this.dialog.open(LoginDialog, {
      width: '500px',
      height: '500px',
      data: {msgs: this.msgs, email: '', password: '', isLoggedIn: this.isLoggedIn}
    });

    this.loginDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result && result.currentUser) {
        this.currentUser = result.currentUser;
        this.isLoggedIn = true;
        this.msgs = [{severity:'info', summary:'Sucessfully Logged In', detail:'You logged into account with the email: ' + this.currentUser.email}];
      }
    });
  }

  openRegisterDialog(): void {
    const registerDialogRef = this.dialog.open(RegisterDialog, {
      width: '500px',
      height: '500px',
      data: {firstname: '', lastname: '', password: ''}
    });

    registerDialogRef.afterClosed().subscribe(result => {
      console.log('The registration dialog was closed');
      if (result && result.currentUser) {
        this.currentUser = result.currentUser;
        this.isLoggedIn = true;
        this.msgs = [{severity:'info', summary:'Sucessfully Registered', detail:'You registered the user: ' + this.currentUser.email}];
        this.router.navigate(['profile/' + this.currentUser.email]);
      }
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.isLoggedIn = false;
  }

  searchSublets(query: string) {
    this.subleaseService.search(query)
      .subscribe(
        data => this.dataService.sublets = data,
        error => console.log(`Search error: ${error}`)
      );
  }
}
