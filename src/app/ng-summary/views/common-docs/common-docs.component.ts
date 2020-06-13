import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'common-docs',
  templateUrl: './common-docs.component.html',
  styleUrls: ['./common-docs.component.scss']
})
export class CommonDocsComponent {
  constructor(
    private messageService: MessageService
  ) {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {

  }

  message: string;

  getMessage() {
    this.message = this.messageService.getMessage();
  }
}
