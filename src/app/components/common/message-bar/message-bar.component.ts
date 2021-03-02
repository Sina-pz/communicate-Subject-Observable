import { CoreLogicService } from './../../../services/core-logic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent implements OnInit {

  constructor(private logic: CoreLogicService) { }

  ngOnInit(): void {
  }


  onSendClick() {
    this.logic.addMessage("New Message is triggered By pressing Message Button");
  }
  onClearClick() {
    this.logic.clearMessage();
  }
  
  
  }
