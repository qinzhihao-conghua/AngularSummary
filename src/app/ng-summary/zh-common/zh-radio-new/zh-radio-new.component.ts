import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zh-radio-new',
  templateUrl: './zh-radio-new.component.html',
  styleUrls: ['./zh-radio-new.component.scss']
})
export class ZhRadioNewComponent implements OnInit {

  constructor() { }
  @Input()
  zhDisabled = false;
  @Input()
  textFiled: string;
  @Input()
  valueFiled: string;
  @Input()
  defaultValue: object;

  @Input()
  set data(value: Array<any>) {
    if (value === undefined || value.length === 0) {
      this.receiveData = [
        {
          name: '是',
          value: '1',
          key: 'demo',
          check: false
        },
        {
          name: '否',
          value: '0',
          key: 'demo',
          check: false
        }
      ];
    } else {
      const random = (Math.floor(Math.random() * 1000000)).toString();
      value.forEach((item, index) => {
        const obj = {
          key: `radio-${random}`
        }
        if (item instanceof Object) {
          obj['name'] = item[this.textFiled];
          obj['value'] = item[this.valueFiled];
          if (this.defaultValue && this.defaultValue[this.valueFiled] === item[this.valueFiled]) {
            obj['check'] = true;
          } else {
            obj['check'] = false;
          }
        } else {
          obj['name'] = item;
          obj['value'] = item;
          obj['check'] = false;
        }
        this.receiveData.push(obj);
      });
    }
  }
  @Output()
  getRadioValue: EventEmitter<any> = new EventEmitter<any>();
  receiveData = [];

  ngOnInit() {
    if (this.receiveData === undefined || this.receiveData.length === 0) {
      this.receiveData = [
        {
          name: '是',
          value: '1',
          key: 'demo',
          check: false
        },
        {
          name: '否',
          value: '0',
          key: 'demo',
          check: false
        }
      ];
    }
  }
  radioCheck(dataItem: object, index: number, event: Event) {
    // event.stopPropagation();
    if (this.zhDisabled) {
      return;
    }
    this.receiveData.forEach(item => {
      item.check = false;
    });
    this.receiveData[index].check = true;
    // console.log('修改结果', this.receiveData);
    this.getRadioValue.emit(this.receiveData[index]);
  }
}
