import { Component, OnInit } from '@angular/core';
import { ZhDialogService } from '../service/zh-dialog.service';

@Component({
  selector: 'zh-common',
  templateUrl: './zh-common.component.html',
  styleUrls: ['./zh-common.component.scss']
})
export class ZhCommonComponent implements OnInit {

  constructor(
    private zhDialogService: ZhDialogService,
  ) { }

  ngOnInit() {
  }
  showDialog() {
    let dialog = this.zhDialogService.open({
      title: 'service标题头',
      content: '弹窗内容===弹窗内容',
      onlySureBtn: false
    });
    dialog.subscribe(data => {
      console.log('service dialog', data);
    })
  }

}
