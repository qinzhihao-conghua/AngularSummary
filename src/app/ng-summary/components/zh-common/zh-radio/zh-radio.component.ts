import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'zh-radio',
  templateUrl: './zh-radio.component.html',
  styleUrls: ['./zh-radio.component.scss']
})
export class ZhRadioComponent implements OnInit {

  constructor() { }

  @Input()
  dsDisabled = false;

  @Input()
  set data(value: Array<any>) {
    if (value === undefined || value.length === 0) {
      this.receiveData = [
        {
          name: '是',
          value: '1',
          id: Math.random().toString(),
          key: 'demo'
        },
        {
          name: '否',
          value: '0',
          id: Math.random().toString(),
          key: 'demo'
        }
      ];
    } else {
      const random = (Math.floor(Math.random() * 1000000)).toString();
      value.forEach((item, index) => {
        item.id = Math.random().toString();
        item.key = `radio-${random}`;
        this.receiveData.push(item);
      });
    }
  }
  @Output()
  getRadioValue: EventEmitter<string> = new EventEmitter<string>();
  selectedIndex: string;
  receiveData = [];

  ngOnInit() {
    if (this.dsDisabled) {
      this.selectedIndex = '-1';
    }
    if (this.receiveData === undefined || this.receiveData.length === 0) {
      this.receiveData = [
        {
          name: '是',
          value: '1',
          id: Math.random().toString(),
          key: 'demo'
        },
        {
          name: '否',
          value: '0',
          id: Math.random().toString(),
          key: 'demo'
        }
      ];
    }
  }
  radioCheck(value: string, index: string) {
    if (this.dsDisabled) {
      return;
    }
    this.selectedIndex = index;
    this.getRadioValue.emit(value);
  }
  checkStyle(i) {
    if (i === this.selectedIndex) {
      return `radio-check`;
    }
    if ('-1' === this.selectedIndex) {
      return `radio-check-disabled`;
    }
  }

}
