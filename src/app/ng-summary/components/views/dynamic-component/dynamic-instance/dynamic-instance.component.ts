import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zh-dynamic-instance',
  templateUrl: './dynamic-instance.component.html',
  styleUrls: ['./dynamic-instance.component.scss']
})
export class DynamicInstanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  public title = "aaaaa";
  sayHello() {
    console.log("我是动态组件的方法");
  }

}
