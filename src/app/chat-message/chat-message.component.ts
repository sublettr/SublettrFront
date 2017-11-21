import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../_services/user.service";
import {User} from "../_models/user";
import {Message} from "../_models/message";

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(public UserService: UserService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') != null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (this.message.author && this.currentUser) {
        this.incoming = this.message.author.email !== this.currentUser.email;
      }
    }
  }
}
