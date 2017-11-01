import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry, MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {LoginDialog} from "./_classes/login";
import {RegisterDialog} from "./_classes/register";
import {User} from "./_models/user";
import {UserService} from "./_services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  isLoggedIn: boolean = false;
  currentUser: User;

  loginDialogRef: MatDialogRef<LoginDialog>;


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog, private userService: UserService) {
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
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }


  openLoginDialog(): void {
    this.loginDialogRef = this.dialog.open(LoginDialog, {
      width: '500px',
      height: '500px',
      data: {username: "", password: "", isLoggedIn: this.isLoggedIn}
    });

    this.loginDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(JSON.stringify(result));
      if (result.username != "" && result.password != "") {
        this.login(result.id, result.username, result.password);
      }
    });
  }

  openRegisterDialog(): void {
    let registerDialogRef = this.dialog.open(RegisterDialog, {
      width: '500px',
      height: '500px',
      data: {firstname: "", lastname: "", password: ""}
    });

    registerDialogRef.afterClosed().subscribe(result => {
      console.log('The registration dialog was closed');
    });
  }

  logout() {
      localStorage.removeItem('currentUser');
      this.isLoggedIn = false;
    }

  login(id: number, username: string, password: string) {
      this.userService.getById(id)
       .subscribe(
            data => {
              this.currentUser = data;
             if (this.currentUser) {
                 // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                  this.isLoggedIn = true;
                }
            },
          error => {
              console.log("Login issue " + error);
            }
       )
    }

}
