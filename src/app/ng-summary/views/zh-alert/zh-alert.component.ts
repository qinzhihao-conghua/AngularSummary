import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'zh-alert',
  templateUrl: './zh-alert.component.html',
  styleUrls: ['./zh-alert.component.scss']
})
export class ZhAlertComponent implements OnInit {

  constructor(
  ) { }

  @Input()
  title: string;
  @Input()
  content: string;
  @Output()
  operation: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input()
  onlySureBtn = false;

  ngOnInit() {
  }
  operationClick(value: boolean) {
    this.operation.emit(value);
  }

}
