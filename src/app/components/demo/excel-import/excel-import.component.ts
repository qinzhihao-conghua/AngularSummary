import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';

@Component({
  selector: 'zh-excel-import',
  templateUrl: './excel-import.component.html',
  styleUrls: ['./excel-import.component.scss']
})
export class ExcelImportComponent implements OnInit {

  constructor() { }
  inputdata = [];
  html = '';

  ngOnInit(): void {
  }

  importExcel(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files')
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.inputdata = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      // this.html = (XLSX.utils.sheet_to_html(ws));
      console.log(this.inputdata);
      // console.log(this.html);

      event.target.value = "" // 清空
    };
    reader.readAsBinaryString(target.files[0]);
  }

}
