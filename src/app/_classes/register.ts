import {Component, Input, Output, EventEmitter, Inject} from "@angular/core";
import {FullUser} from "../_models/full-user";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";
@Component({
  selector: 'app-landing',
  templateUrl: '../_classes/register-dialog.html',
  styleUrls: ['../_classes/login.component.css']
})
export class RegisterDialog {


  @Input() currentUser: FullUser;
  @Output() setCurrentUser: EventEmitter<FullUser> = new EventEmitter<FullUser>();
  @Input() isLoggedIn: boolean;
  @Output() setLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

  tempUser: FullUser;

  constructor(public registerDialogRef: MatDialogRef<RegisterDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService: UserService) {
    this.data = {
      id: 0,
      username: "",
      password: "",
      passwordcpy: "",
      name: "",
      age: 0,
      sex: "",
      major: "",
      grade: 0,
      isSeller: false
    };
  }

  onNoClick(): void {
    this.registerDialogRef.close();
  }

  onRegistrationSubmit() {
    console.log(JSON.stringify(this.data));
  }

  closeDialog() {
    this.registerDialogRef.close();
  }

  register(data) {

    console.log("Registering FullUser: " + this.data);
    if (data == undefined || data.email == "" || data.password != data.passwordcpy) {
      console.log("Invalid user " + this.data);
    }
    let user = new User(data);
    console.log("Registering user: " + JSON.stringify(this.tempUser));
    /* Registration Request */
    this.userService.register(user)
      .subscribe(
        data => {
          this.currentUser = data;
          this.setCurrentUser.emit(this.currentUser);
          if (this.currentUser) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

            this.isLoggedIn = true;
            this.setLoggedIn.emit(this.isLoggedIn);

            console.log("Registered");

            /* Put User Request */
            this.userService

            this.closeDialog();
          }
        },
        error => {
          console.log("Registration issue " + error);
        }
      )
  }
}
