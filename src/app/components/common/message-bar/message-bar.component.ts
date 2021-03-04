import { CoreLogicService } from './../../../services/core-logic.service';
import { Component, OnInit } from '@angular/core';
import { Msg } from 'src/app/models/message';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent implements OnInit {
  public messageCounter = 0;

  constructor(private logic: CoreLogicService) { }

  ngOnInit(): void {
  }


  onSendClick() {
    this.messageCounter++;
    const message = new Msg(this.messageCounter, `The message ${this.messageCounter}` );
    this.logic.addMessage(message, this.messageCounter);
  }
  onClearClick() {
    let messageId;
    this.logic.targetMessageId$.subscribe(id => messageId = id );
    console.log("done");
    
    this.logic.clearMessage(messageId);
    
  }
  
  
  }
