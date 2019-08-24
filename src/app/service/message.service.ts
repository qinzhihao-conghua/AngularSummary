import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  message:string;
  sentMessage(message:string){
    this.message=message;
  }
  getMessage(){
    return this.message;
  }
}
