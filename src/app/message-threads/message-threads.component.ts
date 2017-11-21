import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ThreadsService} from "../_services/thread.service";

@Component({
  selector: 'app-message-threads',
  templateUrl: './message-threads.component.html',
  styleUrls: ['./message-threads.component.css']
})
export class MessageThreadsComponent implements OnInit {

  threads: Observable<any>;

  constructor(public threadsService: ThreadsService) {
    this.threads = threadsService.orderedThreads;
  }

  ngOnInit(): void {
  }
}
