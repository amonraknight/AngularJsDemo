import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AiReply } from '../interfaces/aireply';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PromptToAI } from '../interfaces/promptToAI';

@Injectable({
  providedIn: 'root'
})
export class ChatSupportService {
  //private aiUrl = 'http://localhost:3000/ai';
  private aiUrl = 'api/ai';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  sendMessages(predecessorScripts: string[], messages: string[]): Observable<AiReply> {
    //console.log(messages)
    let promptToAI: PromptToAI = {
      predecessorScripts: predecessorScripts,
      messages: messages
    }

    let subscribe = this.http.post<AiReply>(this.aiUrl, promptToAI, this.httpOptions);
    console.log(subscribe)
    return subscribe
    .pipe(
      tap(() => this.log(`Seceived a reply.`)),
      catchError(this.handleError<AiReply>('post error'))
    );
  } 

  private log(message: string) {
    console.log(message)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
