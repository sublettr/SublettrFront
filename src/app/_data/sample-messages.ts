/* tslint:disable:max-line-length */
import * as moment from "moment";
import {Thread} from "../_models/thread";
import {Message} from "../_models/message";
import {MessagesService} from "../_services/message.service";
import {ThreadsService} from "../_services/thread.service";
import {UserService} from "../_services/user.service";
import {FullUser} from "../_models/full-user";

// the person using the app us Juliet
const ladycap: FullUser = new FullUser({email: 'lc@purdue.edu', name: 'Lady Capulet'});
const echo: FullUser    = new FullUser({email: 'eb@purdue.edu', name: 'Echo Bot'});
const rev: FullUser     = new FullUser({email: 'rb@purdue.edu', name: 'Reverse Bot'});
const wait: FullUser    = new FullUser({email: 'wb@purdue.edu', name: 'Waiting Bot'});

const tLadycap: Thread = new Thread('tLadycap', ladycap.name, 'assets/search-icon.png');
const tEcho: Thread    = new Thread('tEcho', echo.name, 'assets/search-icon.png');
const tRev: Thread     = new Thread('tRev', rev.name, 'assets/search-icon.png');
const tWait: Thread    = new Thread('tWait', wait.name, 'assets/search-icon.png');

const initialMessages: Array<Message> = [
  new Message({
    author: echo,
    sentAt: moment().subtract(45, 'minutes').toDate(),
    text: 'Yet let me weep for such a feeling loss.',
    thread: tLadycap
  }),
  new Message({
    author: ladycap,
    sentAt: moment().subtract(20, 'minutes').toDate(),
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    thread: tLadycap
  }),
  new Message({
    author: echo,
    sentAt: moment().subtract(1, 'minutes').toDate(),
    text: `I\'ll echo whatever you send me`,
    thread: tEcho
  }),
  new Message({
    author: rev,
    sentAt: moment().subtract(3, 'minutes').toDate(),
    text: `I\'ll reverse whatever you send me`,
    thread: tRev
  }),
  new Message({
    author: wait,
    sentAt: moment().subtract(4, 'minutes').toDate(),
    text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
    thread: tWait
  }),
];

export class ChatExampleData {
  static init(messagesService: MessagesService,
              threadsService: ThreadsService,
              UsersService: UserService): void {

    // TODO make `messages` hot
    messagesService.messages.subscribe(() => ({}));

    // set "Juliet" as the current user
    // UsersService.setCurrentUser(me);

    // create the initial messages
    initialMessages.map( (message: Message) => messagesService.addMessage(message) );

    threadsService.setCurrentThread(tEcho);

    this.setupBots(messagesService);
  }

  static setupBots(messagesService: MessagesService): void {

    // echo bot
    messagesService.messagesForThreadUser(tEcho, echo)
      .forEach( (message: Message): void => {
          messagesService.addMessage(
            new Message({
              author: echo,
              text: message.text,
              thread: tEcho
            })
          );
        },
        null);


    // reverse bot
    messagesService.messagesForThreadUser(tRev, rev)
      .forEach( (message: Message): void => {
          messagesService.addMessage(
            new Message({
              author: rev,
              text: message.text.split('').reverse().join(''),
              thread: tRev
            })
          );
        },
        null);

    // waiting bot
    messagesService.messagesForThreadUser(tWait, wait)
      .forEach( (message: Message): void => {

          let waitTime: number = parseInt(message.text, 10);
          let reply: string;

          if (isNaN(waitTime)) {
            waitTime = 0;
            reply = `I didn\'t understand ${message.text}. Try sending me a number`;
          } else {
            reply = `I waited ${waitTime} seconds to send you this.`;
          }

          setTimeout(
            () => {
              messagesService.addMessage(
                new Message({
                  author: wait,
                  text: reply,
                  thread: tWait
                })
              );
            },
            waitTime * 1000);
        },
        null);


  }
}
