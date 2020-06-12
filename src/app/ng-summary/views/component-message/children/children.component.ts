import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {
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
