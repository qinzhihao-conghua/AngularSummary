import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'zh-checkbox',
  templateUrl: './zh-checkbox.component.html',
  styleUrls: ['./zh-checkbox.component.scss']
})
export class ZhCheckboxComponent implements OnInit {

  constructor() { }

  @Input()
  set data(value: Array<any>) {
    if (value === undefined || value.length === 0) {
      this.receiveData = [{
        name: '轻微',
        value: '1',
        tag: Math.random().toString()
      }];
    } else {
      value.forEach((item, index) => {
        if (item.check) {
          this.selectedValue.push(item.value);
        }
        item.tag = Math.random().toString();
        this.receiveData.push(item);
      });
    }
  }
  @Input()
  dsDisabled = false;
  @Output()
  getSelectValues = new EventEmitter<Array<any>>();

  selectedIndex: string;
  receiveData = [];
  selectedValue = [];

  ngOnInit() {
    if (this.dsDisabled) {
      this.selectedIndex = '-1';
    }
    if (this.receiveData.length <= 0) {
      const obj = {
        name: '轻微',
        value: '1',
        tag: Math.random().toString()
      };
      this.receiveData.push(obj);
    }
  }
  checkboxSelected(item, i) {
    if (this.dsDisabled) {
      return;
    }
    if (!this.selectedValue.includes(item.value)) {
      this.selectedValue.push(item.value);
    } else {
      this.selectedValue.splice(this.selectedValue.indexOf(item.value), 1);
    }
    this.getSelectValues.emit(this.selectedValue);
    // console.log('选中', this.selectedValue);
  }
  checkStyle(i) {
    if ('-1' === this.selectedIndex) {
      return `checkbox-check-disabled`;
    }
  }

}
