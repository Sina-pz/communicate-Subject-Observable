import { Msg } from './message';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageMockService {

  public messages: Msg[];

  constructor() {

  }
  getMassages(): Msg[] {
    const constMessage = 'The message number '
    for (let i: 0; i < 20; i++) {
      const message = new Msg(i, (constMessage + i));
      this.messages.push(message);
    }

    return this.messages;
  }

}
