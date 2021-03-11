import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FileExportComponent } from './file-export/file-export.component';
import { DemoRoutingModule } from './demo-routing.module';
import { ExcelImportComponent } from './excel-import/excel-import.component';



@NgModule({
  declarations: [DemoComponent, FileExportComponent, ExcelImportComponent],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
