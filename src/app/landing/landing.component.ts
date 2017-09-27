import {Component, OnInit, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA, MdDialog} from "@angular/material";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openLoginDialog(): void {
    let loginDialogRef = this.dialog.open(LoginDialog, {
      width: '500px',
      height: '500px',
      data: { firstname: "", lastname: "", password: "" }
    });

    loginDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openRegisterDialog(): void {
    let registerDialogRef = this.dialog.open(RegisterDialog, {
      width: '500px',
      height: '500px',
      data: { firstname: "", lastname: "", password: "" }
    });

    registerDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-landing',
  templateUrl: './login-dialog.html',
  styleUrls: ['./login.component.css']
})
export class LoginDialog {

  constructor(
    public loginDialogRef: MdDialogRef<LoginDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.loginDialogRef.close();
  }

}

@Component({
  selector: 'app-landing',
  templateUrl: './register-dialog.html',
  styleUrls: ['./login.component.css']
})
export class RegisterDialog {

  constructor(
    public registerDialogRef: MdDialogRef<RegisterDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.registerDialogRef.close();
  }

}