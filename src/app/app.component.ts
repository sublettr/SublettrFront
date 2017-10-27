import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'app';

  isLoggedIn: boolean;
  currentUser: User;

  loginDialogRef: MatDialogRef<LoginDialog>;


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog,  private userService: UserService) {
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

  openLoginDialog(): void {
    this.loginDialogRef = this.dialog.open(LoginDialog, {
      width: '500px',
      height: '500px',
      data: {firstname: "", lastname: "", password: ""}
    });

    this.loginDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(JSON.stringify(result));
      if (result.username != "" && result.password != "") {
        this.loginDialogRef.componentInstance.login(result.id, result.username, result.password);
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
    this.loginDialogRef.componentInstance.logout();
  }
}
