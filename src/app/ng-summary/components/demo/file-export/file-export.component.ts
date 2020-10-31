import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'zh-file-export',
  templateUrl: './file-export.component.html',
  styleUrls: ['./file-export.component.scss']
})
export class FileExportComponent implements OnInit {

  constructor() { }
  @ViewChild('downloadContent') downloadContent: ElementRef;

  ngOnInit(): void {
  }

  export() {
    const dom = document.getElementById('downloadContent').innerHTML;
    const word = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8';
    const word1 = 'application/msword;charset=utf-8';
    const blob = new Blob(['\ufeff' + dom], { type: word1 });
    // saveAs(blob, '成绩单');

    let url = URL.createObjectURL(blob);
    (document.getElementById('download') as any).href = url;
  }

}
