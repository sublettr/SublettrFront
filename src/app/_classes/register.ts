import {Component, Input, Output, EventEmitter, Inject} from "@angular/core";
import {User} from "../_models/user";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {UserService} from "../_services/user.service";
@Component({
  selector: 'app-landing',
  templateUrl: '../_classes/register-dialog.html',
  styleUrls: ['../_classes/login.component.css']
})
export class RegisterDialog {


  @Input() currentUser: User;
  @Output() setCurrentUser: EventEmitter<User> = new EventEmitter<User>();
  @Input() isLoggedIn: boolean;
  @Output() setLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

  tempUser: User;

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

    console.log("Registering User: " + this.data);
    if (data == undefined || data.username == "" || data.password != data.passwordcpy) {
      console.log("Invalid user " + this.data);
    }
    this.tempUser = new User(data);
    console.log("Mapped user: " + JSON.stringify(this.tempUser));
    this.userService.create(this.tempUser)
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
            this.closeDialog();
          }
        },
        error => {
          console.log("Registration issue " + error);
        }
      )
  }
}
