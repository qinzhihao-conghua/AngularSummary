import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zh-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {

  constructor() { }

  sideBarMenu = [
    { url: './common-docs', title: '文档' },
    { url: './component-message', title: '组件间通讯' },
    { url: './router', title: '路由相关' },
    { url: './pipe', title: '管道与指令' },
    { url: './http-example', title: 'http请求' },
    { url: './upload', title: '上传文件' },
    { url: './animation', title: '动画' },
    { url: './from', title: '表单使用' },
    { url: './dynamic', title: '动态组件' },
    { url: './view-ref', title: 'child和children相关' }
  ]

  ngOnInit() {
  }

}
