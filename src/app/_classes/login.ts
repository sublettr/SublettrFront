import {Component, Inject, EventEmitter, Output, Input, OnInit} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";
@Component({
  selector: 'app-landing',
  templateUrl: './login-dialog.html',
  styleUrls: ['./login.component.css']
})
export class LoginDialog implements OnInit {

  isLoggedIn: boolean;
  currentUser: User;

  constructor(public loginDialogRef: MatDialogRef<LoginDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserService) {
    this.data = {
      id: 1,
      email: "",
      password: ""
    };
  }

  ngOnInit() {
    this.logout();
  }

  onNoClick(): void {
    this.loginDialogRef.close();
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
