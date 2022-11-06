import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zh-zh-css',
  templateUrl: './zh-css.component.html',
  styleUrls: ['./zh-css.component.scss']
})
export class ZhCssComponent implements OnInit {

  constructor() { }

  sideBarMenu = [
    { url: './loading', title: 'loading' },
    { url: './button', title: 'button' },
    { url: './gradient-text', title: '渐变文字' },
    { url: './card', title: '卡片效果' },
    { url: './svg', title: 'svg动画' },
    { url: './waves', title: '波浪球' },
    { url: './embossment', title: '新拟态按钮' },
    { url: './popup-nav', title: '浮动菜单' },
    { url: './backdrop-filter', title: '毛玻璃' }
  ]

  ngOnInit() {
  }

}
