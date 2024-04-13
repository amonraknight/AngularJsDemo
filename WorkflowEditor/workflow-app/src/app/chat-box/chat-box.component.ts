import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChatSupportService } from '../services/chat-support.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  constructor(private chatSupportService: ChatSupportService) { }

  userInput!: string

  messages: string[] = [];
  //The python scripts from the predecessors, the lower the index, the closer to the current step.
  @Input({required: true}) predecessorSteps!: string[];
  @Output() renewScriptEvent = new EventEmitter<string>();

  renewScript(script: string): void {
    this.renewScriptEvent.emit(script);
  }

  sendMessage() {

    this.messages.push(this.userInput);
    this.userInput = '';

    this.chatSupportService.sendMessages(this.predecessorSteps, this.messages)
      .subscribe(data => {
        //console.log(data)
        this.messages.push(data.messagereply);
        this.renewScript(data.codereply);
      });
  }

  

  
}
