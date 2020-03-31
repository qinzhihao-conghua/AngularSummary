import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseControl } from '../from-control/base-control';
import { TextArea } from '../from-control/textarea';
import { TextBox } from '../from-control/textbox';

@Component({
  selector: 'zh-dynamic-from',
  templateUrl: './dynamic-from.component.html',
  styleUrls: ['./dynamic-from.component.scss']
})
export class DynamicFromComponent implements OnInit {

  constructor() { }

  form: FormGroup;
  controls: BaseControl<any>[];
  ngOnInit() {
    this.controls = this.createControls();
    this.form = this.toFromGroup(this.controls);
  }
  //构建控件，如果需要放一些默认数据以及其他的验证都在这里进行
  createControls() {
    return [
      new TextArea({
        placeholder: "地方描述，最多120字。",
        rows: 3,
        key: "desc1"
      }),
      new TextArea({
        placeholder: "路线描述，最多120字。",
        rows: 3,
        key: "desc2"
      }),
      new TextBox({
        placeholder: "用户名",
        value: "张三",
        key: "userName"
      })
    ]
  }
  //循环控件加到formgroup上
  toFromGroup(controls: BaseControl<any>[]) {
    let group: any = {};
    controls.forEach(item => {
      //这个是要绑到formControlName上的值，如果都不设置具体名称的话，
      //最后提交拿到只有最后改变的那个控件的值，我这写的和官网上的不一样
      //这里是一种投机行为
      group[item.key] = new FormControl(item.key || "");
    });
    return new FormGroup(group);
  }

  onSubmit() {
    //这里是提交时获取到的所有表单数据，如果都不填获取的是默认的值
    console.log(this.form.value);
  }

}