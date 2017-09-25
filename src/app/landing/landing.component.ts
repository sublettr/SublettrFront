import {Component, OnInit, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA, MdDialog} from "@angular/material";

import {HttpService} from './../utility/http.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  searchText: string;

  constructor(public dialog: MdDialog, private httpServ: HttpService) { }

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

  search() {
    this.httpServ.search(this.searchText)
      .subscribe(()=>{
        console.log('response received');
      },
    err =>{
      console.log('error on search response');
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

