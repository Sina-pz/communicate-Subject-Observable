import { CoreLogicService } from './../../../services/core-logic.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit {

  @Input() set id(id: number) {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    
    this.subscription = this.logic.selectMessageDictionary$(id).subscribe(message => message ? this.message = message : this.message = '');

  }
  public subscription: Subscription;
  public message : string;

  constructor(private logic: CoreLogicService) { }

  ngOnInit(): void {
  }



  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    
  }
  

}
