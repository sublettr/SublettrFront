import { Injectable } from "@angular/core";
import {User} from "../_models/user";

@Injectable()
export class UserTrackingService {
  constructor() { }

  public user: User;
}
