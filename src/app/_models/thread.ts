
import {Message} from "./message";
/**
 * Thread represents a group of Users exchanging Messages
 */
export class Thread {
  email: string;
  lastMessage: Message;
  name: string;
  avatarSrc: string;

  constructor(email?: string,
              name?: string,
              avatarSrc?: string) {
    this.email = email;
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}
