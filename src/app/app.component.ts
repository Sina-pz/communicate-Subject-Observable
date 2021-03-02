import { CoreLogicService } from './services/core-logic.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'componentCommunication';
  public messages: string[] = ['There is no new message'];
  public subscription: Subscription;
  constructor(private logic: CoreLogicService) {
    this.subscription = this.logic.getMessage$().subscribe(message => 
      message ? this.messages.push(message): this.messages = []);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    
  }
}
