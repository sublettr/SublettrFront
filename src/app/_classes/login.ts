import {Component, Inject, EventEmitter, Output, Input, OnInit} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-landing',
  templateUrl: './login-dialog.html',
  styleUrls: ['./login.component.css']
})
export class LoginDialog implements OnInit {

  constructor(public loginDialogRef: MatDialogRef<LoginDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserService) {
    this.data = {
      id: 26,
      email: "",
      password: ""
    };
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.loginDialogRef.close();
  }
}
