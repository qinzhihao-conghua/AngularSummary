import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zh-common-comp',
  templateUrl: './common-comp.component.html',
  styleUrls: ['./common-comp.component.scss']
})
export class CommonCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  radioNewData = [
    { name: '测试1', value: '1', other: '其他字段' },
    { name: '测试2', value: '2', other: '其他字段' },
    { name: '测试3', value: '3', other: '其他字段' },
    { name: '测试4', value: '4', other: '其他字段' },
    { name: '测试5', value: '5', other: '其他字段' },
    { name: '测试6', value: '6', other: '其他字段' },
  ]
  checkboxNewData = [
    { name: '测试1', value: '1', check: true, other: '其他字段' },
    { name: '测试2', value: '2', other: '其他字段' },
    { name: '测试3', value: '3', check: true, other: '其他字段' },
    { name: '测试4', value: '4', other: '其他字段' },
    { name: '测试5', value: '5', other: '其他字段' },
    { name: '测试6', value: '6', other: '其他字段' },
  ]


  getRadioValue(value) {
    console.log('value', value);
  }
  getCheckboxValues(value) {
    console.log('value', value);
  }

}
