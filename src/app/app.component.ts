import { CoreLogicService } from './services/core-logic.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentCommunication';
  // old version
  public messages: string[] = ['There is no new message'];
  public subscription: Subscription;

  public messageIds: number[];



  constructor(private logic: CoreLogicService) {
    this.subscription = this.logic.message$.subscribe(message =>
      message ? this.messages.push(message) : this.messages = []);
    // id
    this.logic.messageIds$.subscribe(maxNumber => this.fromMessageIds(maxNumber));

  }
  private fromMessageIds(ids: number): void {
    this.messageIds = [];
    for (let id = 0; id < ids; id++) {
      this.messageIds.push(id + 1);
      console.log(id);
      console.log(this.messageIds);

    }
  }

  onMessageIdClick(id: number): void {
    console.log("on message id click" + id);
    this.logic.targetMessageId(id);
    
  }



}
