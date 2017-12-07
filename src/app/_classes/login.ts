import {Component, Inject, EventEmitter, Output, Input, OnInit} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";
import {FullUser} from "../_models/full-user";
import {Message} from "primeng/components/common/message";

@Component({
  selector: 'app-landing',
  templateUrl: './login-dialog.html',
  styleUrls: ['./login.component.css']
})
export class LoginDialog implements OnInit {

  currentUser: FullUser;

  msgs: Message[] = [];

  constructor(public loginDialogRef: MatDialogRef<LoginDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserService) {
    this.msgs = this.data.msgs;
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.loginDialogRef.close();
  }

  login(userData) {
    this.userService.login(new User(userData))
      .subscribe(
        data => {
          console.log(data);
          if (data.access_token) {
            localStorage.setItem('accessToken', data.access_token);
            this.userService.getFullByEmail(userData.email).subscribe(data => {
                this.currentUser = data;
                if (this.currentUser) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                  this.msgs = [{severity:'info', summary:'Sucessfully Logged In', detail:'You logged into account with the email: ' + this.currentUser.email}];
                  this.loginDialogRef.close({'currentUser': this.currentUser});
                } else {
                  this.msgs = [{
                    severity: 'error',
                    summary: 'Error from the Server',
                    detail: 'The user returned back was not valid'
                  }];
                }
              },
              error => {
                console.log('Get Full User By Email error');
              }
            );
          }

        },
        error => {
          console.log('Login issue ' + error._body);
          this.msgs = [{severity:'error', summary:'Login Error', detail:error._body}];
        }
      );
  }
}
