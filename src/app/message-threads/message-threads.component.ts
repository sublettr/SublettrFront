import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ThreadsService} from "../_services/thread.service";
import {FullUser} from "../_models/full-user";

@Component({
  selector: 'app-message-threads',
  templateUrl: './message-threads.component.html',
  styleUrls: ['./message-threads.component.css']
})
export class MessageThreadsComponent implements OnInit {

  threads: Observable<any>;

  currentUser: FullUser = new FullUser('');

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.getAllThreads(this.currentUser.id);
    }
  }

  getAllThreads(userHashID: string) {
    this.threadsService.getAllThreads(userHashID).subscribe(
      data => {
        this.threads = data;
        console.log("Threads pulled. ");
      },
      error => {
        console.log("Can't pull down chat rooms.")
      }
    )
  }
}
