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

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialog, {
      width: '500px',
      height: '500px',
      data: { firstname: "", lastname: "", password: "" }
    });

    dialogRef.afterClosed().subscribe(result => {
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
    public dialogRef: MdDialogRef<LoginDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

