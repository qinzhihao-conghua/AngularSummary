import { Component } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';

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
  condition = false;
  message: string;
  opendialog = false;
  getMessage() {
    this.message = this.messageService.getMessage();
  }
  colorAndSize = { color: 'red', size: '24' };
  test() {
    this.condition = !this.condition;
  }
  openAlert() {
    this.opendialog = true;
  }
  alertOperation(value) {
    console.log(value);
    this.opendialog = false;
  }

}
