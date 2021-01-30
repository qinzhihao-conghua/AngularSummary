import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/main/service/message.service';

@Component({
  selector: 'zh-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.scss']
})
export class Children2Component implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  message: string;

  getMessage() {
    this.message = this.messageService.getMessage();
  }
}
