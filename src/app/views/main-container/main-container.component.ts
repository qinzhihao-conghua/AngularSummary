import { Component, OnInit, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { ZhDialogService } from 'src/app/service/zh-dialog.service';
import { ZhAlertComponent } from '../zh-alert/zh-alert.component';

@Component({
  selector: 'zh-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(
    private zhDialogService: ZhDialogService
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
