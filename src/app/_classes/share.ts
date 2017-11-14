import {Component, Inject, EventEmitter, Output, Input, OnInit} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-landing',
  templateUrl: './share-dialog.html',
  styleUrls: ['./share.component.css']
})
export class ShareDialog implements OnInit {

  constructor(public shareDialogRef: MatDialogRef<ShareDialog>,
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
    this.shareDialogRef.close();
  }
}
