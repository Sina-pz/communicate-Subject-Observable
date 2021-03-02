import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreLogicService {
  private messageSubject: Subject<string>;
  private messageSubjectDictionary: {[id: number]: Subject<string>};

  constructor() {
    this.messageSubjectDictionary = {};
    this.messageSubject = new Subject<string>();
   }
   addMessage(message: string) {
     this.messageSubject.next(message);
   }
   clearMessage() {
     this.messageSubject.next();
   }
   getMessage$(): Observable<string> {
     return this.messageSubject.asObservable();
   }
}
