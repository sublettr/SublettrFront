import { Injectable } from "@angular/core";
import { Sublease } from "../_models/sublease";

@Injectable()
export class DataService {
  constructor() { }

  public post: Sublease;
}
