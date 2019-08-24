import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'out',
  templateUrl: './out-example.component.html',
  styleUrls: ['./out-example.component.css']
})
export class OutputComponent {
  @Input()
  requestData:string;
  @Output()
  sendToParent:EventEmitter<string>=new EventEmitter();
  toParent:string;
  sendToPar(){
    this.sendToParent.emit(this.toParent);
    console.log("进入");
  }
  childFunction(pram:any){
    console.log("我是子组件的方法"+pram);
  }
}
