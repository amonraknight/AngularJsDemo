import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AiReply } from '../interfaces/aireply';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PromptToAI } from '../interfaces/promptToAI';
import { CommonRequestService } from './common-request.service';
import { ChatMessage } from '../interfaces/chatMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatSupportService extends CommonRequestService {

  //private aiUrl = 'api/ai';
  private aiUrl = 'http://127.0.0.1:8100/aiagent/getaireply';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  sendMessages(predecessorScripts: string[], messages: ChatMessage[]): Observable<AiReply> {
    //console.log(messages)
    let promptToAI: PromptToAI = {
      predecessorScripts: predecessorScripts,
      messages: messages
    }

    let subscribe = this.http.post<AiReply>(this.aiUrl, promptToAI, this.httpOptions);
    console.log(subscribe);
    return subscribe
    .pipe(
      tap(() => this.log('Seceived a reply.')),
      catchError(this.handleError<AiReply>('post error'))
    );
  } 

}
