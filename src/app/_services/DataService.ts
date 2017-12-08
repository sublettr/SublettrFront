import { Injectable } from '@angular/core';
import { Sublease } from '../_models/sublease';
import {Message as PrimengMessage} from "primeng/components/common/message";

@Injectable()
export class DataService {
  constructor() { }

  public post: Sublease;
  public sidebar: boolean;
  public sublets: Sublease[];
  public msgs: PrimengMessage[] = [];

}
