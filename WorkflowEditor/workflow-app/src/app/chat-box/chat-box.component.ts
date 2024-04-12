import { Component, Output, EventEmitter } from '@angular/core';
import { ChatSupportService } from '../services/chat-support.service';
import { AiReply } from '../interfaces/aireply';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  constructor(private chatSupportService: ChatSupportService) { }

  userInput!: string

  messages: string[] = [];
 
  @Output() renewScriptEvent = new EventEmitter<string>();

  renewScript(script: string): void {
    this.renewScriptEvent.emit(script);
  }

  sendMessage() {

    this.messages.push(this.userInput);
    this.userInput = '';

    this.chatSupportService.sendMessages(this.messages)
      .subscribe(data => {
        //console.log(data)
        this.messages.push(data.messagereply);
        this.renewScript(data.codereply);
      });
  }

  

  
}
