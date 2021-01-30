import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zh-children1',
  templateUrl: './children1.component.html',
  styleUrls: ['./children1.component.scss']
})
export class Children1Component {
  @Input()
  requestData: string;
  @Output()
  sendToParent: EventEmitter<string> = new EventEmitter();
  toParent: string;
  sendToPar() {
    this.sendToParent.emit(this.toParent);
    console.log("进入");
  }
  childFunction(pram: any) {
    console.log("我是子组件的方法" + pram);
  }
}
