import {Component, OnInit, Input} from '@angular/core';
import {Thread} from "../_models/thread";
import {ThreadsService} from "../_services/thread.service";

@Component({
  selector: 'app-message-threads',
  templateUrl: 'message-thread.component.html',
  styleUrls: ['message-thread.component.css']
})
export class MessageThreadComponent implements OnInit {
  @Input() thread: Thread;
  selected = false;

  constructor(public threadsService: ThreadsService) { }

  ngOnInit() {
    this.threadsService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread &&
          this.thread &&
          (currentThread.id === this.thread.id);
      });
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }

}
