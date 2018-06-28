import { Injectable } from '@angular/core';

@Injectable()
export class LocalserviceService {

  sweets=['rasgulla']
  constructor() { }

  listSweets(){
    return "These are the sweets";
  }
}
