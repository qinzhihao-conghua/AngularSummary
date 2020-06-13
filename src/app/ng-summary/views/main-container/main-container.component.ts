import { Component, OnInit } from '@angular/core';
import { ZhDialogService } from '../../service/zh-dialog.service';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'zh-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor(
    private zhDialogService: ZhDialogService,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

  requesrServer() {
    this.http.getRsponseData().subscribe(data => {
      console.log(data);
    });
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
