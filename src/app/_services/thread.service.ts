import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import {Thread} from "../_models/thread";
import {Message} from "../_models/message";
import {MessagesService} from "./message.service";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {environment} from "../../environments/environment";

@Injectable()
export class ThreadsService {

  baseURL: string;

  // `threads` is a observable that contains the most up to date list of threads
  threads: Observable<{ [key: string]: Thread }>;

  // `orderedThreads` contains a newest-first chronological list of threads
  orderedThreads: Observable<Thread[]>;

  // `currentThread` contains the currently selected thread
  currentThread: Subject<Thread> =
    new BehaviorSubject<Thread>(new Thread());

  // `currentThreadMessages` contains the set of messages for the currently
  // selected thread
  currentThreadMessages: Observable<Message[]>;

  constructor(public messagesService: MessagesService, private http: Http) {

    this.baseURL = environment['API_URL'];

    this.threads = messagesService.messages
      .map( (messages: Message[]) => {
        const threads: {[key: string]: Thread} = {};
        // Store the message's thread in our accumulator `threads`
        messages.map((message: Message) => {
          threads[message.thread.id] = threads[message.thread.id] ||
            message.thread;

          // Cache the most recent message for each thread
          const messagesThread: Thread = threads[message.thread.id];
          if (!messagesThread.lastMessage ||
            messagesThread.lastMessage.sentAt < message.sentAt) {
            messagesThread.lastMessage = message;
          }
        });
        return threads;
      });

    this.orderedThreads = this.threads
      .map((threadGroups: { [key: string]: Thread }) => {
        const threads: Thread[] = _.values(threadGroups);
        return _.sortBy(threads, (t: Thread) => t.lastMessage.sentAt).reverse();
      });

    this.currentThreadMessages = this.currentThread
      .combineLatest(messagesService.messages,
        (currentThread: Thread, messages: Message[]) => {
          if (currentThread && messages.length > 0) {
            return _.chain(messages)
              .filter((message: Message) =>
                (message.thread.id === currentThread.id))
              .map((message: Message) => {
                message.isRead = true;
                return message; })
              .value();
          } else {
            return [];
          }
        });

    this.currentThread.subscribe(this.messagesService.markThreadAsRead);
  }

  getHeaders() {
    const headers = new Headers();
    // headers.append("Content-Type", "text/xml");
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers });
    console.log(JSON.stringify(options));
    return options;
  }

  setCurrentThread(newThread: Thread): void {
    this.currentThread.next(newThread);
  }

  getAllThreads(userHashID: string) {
    return this.http.get(this.baseURL + '/api/Message/thread/user/' + userHashID, this.getHeaders()).map((response: Response) => response.json());
  }

}

export const threadsServiceInjectables: Array<any> = [
  ThreadsService
];
