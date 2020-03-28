import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  constructor(
    private messageService: MessageService
  ) {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {

  }

  sendToChild: string;
  requestData: string;
  getOutput(event: string) {
    console.log(event);
    this.requestData = event;
  }

  /*
    @ViewChild是属性装饰器，用来获取模板上的定义了对应属性的dom对象
    在这里的解释为获取模板中定义了“child”属性的dom对象，childRecive为接收变量，返回值是ChildrenComponent类型
    如此定义之后，childRecive将能够访问ChildrenComponent中所有的属性与方法
    @ViewChild的返回值可以是组件类型，也可以是HTML元素类型ElementRef
  */
  @ViewChild("child")
  childRecive: ChildrenComponent;

  useChildFunction() {
    this.childRecive.childFunction(1);
  }
  tempValue: string;
  onBlur(value: string) {
    this.tempValue = value;
  }
  sent() {
    this.messageService.sentMessage("发送的消息");
  }
}
