import { Component, OnInit } from '@angular/core';
import { ZhDialogService } from '../../main/service/zh-dialog.service';

@Component({
  selector: 'zh-common',
  templateUrl: './zh-common.component.html',
  styleUrls: ['./zh-common.component.scss']
})
export class ZhCommonComponent implements OnInit {

  constructor(
    private zhDialogService: ZhDialogService,
  ) { }
  sideBarMenu = [
    { url: './common-comp', title: '通用组件' },
    { url: '', title: '弹出框alert' },
    { url: './zh-map', title: '地图' },
  ];

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
  clickHandle(value) {
    if (value && value.title === '弹出框alert') {
      this.showDialog();
    }
  }

}
