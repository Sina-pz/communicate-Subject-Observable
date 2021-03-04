import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Msg } from '../models/message';

export interface ILogic {
  // demonstrate how other component communicate 
  messageIds$: Observable<number>;
  message$: Observable<string>;
  targetMessageId$: Observable<number>;

  // 
  selectMessageDictionary$(messageId: number): Observable<string>;
  targetMessageId(messageId: number): void;

}

@Injectable({
  providedIn: 'root'
})
export class CoreLogicService implements ILogic {
  private messageSubject = new Subject<string>();
  private messageIdsSubject = new Subject<number>();
  private targetMessageIdSubject$ = new BehaviorSubject(-1);
  private messageSubjectDictionary: {[id: number]: BehaviorSubject<string>};


  constructor() {
    this.messageSubjectDictionary = {};    
   }
  
   addMessage(message: Msg, maxNumMessage: number): void {
     
     if(!this.messageSubjectDictionary[message.id]) {

       this.messageSubjectDictionary[message.id] = new BehaviorSubject(message.content);
       console.log(this.messageSubjectDictionary[message.id].value);
       console.log("hi" + this.messageSubjectDictionary[message.id]);
     } else {
      console.log(this.messageSubjectDictionary[message.id].value);
      console.log(this.messageSubjectDictionary[message.id]);
       this.messageSubjectDictionary[message.id].next(message.content);
     }
     this.messageSubject.next(message.content);
     // list of ids
     this.messageIdsSubject.next(maxNumMessage);
     //console.log("hiii" +this.messageIdsSubject.next(maxNumMessage));
     

   }
   targetMessageId(messageId: number) {
     this.targetMessageIdSubject$.next(messageId);
     //console.log("hii" + this.targetMessageIdSubject$.next(messageId));
     
   }
   clearMessage(id : number): void {
     // this.messageSubject.next();
     this.messageSubjectDictionary[id].next('');
     
   }
   public get message$(): Observable<string> {
     return this.messageSubject.asObservable();
   }
   public get messageIds$(): Observable<number>{

    return this.messageIdsSubject.asObservable();
  }
  public get targetMessageId$(): Observable<number> {
        return this.targetMessageIdSubject$.asObservable();
  }

   selectMessageDictionary$(messageId: number): Observable<string> {
     return this.messageSubjectDictionary[messageId].asObservable();
   }


}
