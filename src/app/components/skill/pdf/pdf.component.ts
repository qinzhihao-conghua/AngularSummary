import { Component, OnInit } from '@angular/core';
import Watermark from './watermark';

@Component({
  selector: 'zh-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printDoc() {
    const watermark = new Watermark();
    watermark.setWatermark('测试文本', 'test');
    // print({
    //   printable: "test",
    //   type: 'html',
    //   header: '这不是页眉，这是相当于插入标题头',
    //   targetStyles: ['*'],
    //   style: ""
    // })
    setTimeout(() => {
      watermark.removeWatermark('333', 'test')
    }, 3000);
  }

}
