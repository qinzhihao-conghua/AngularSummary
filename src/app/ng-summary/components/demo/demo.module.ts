import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FileExportComponent } from './file-export/file-export.component';



@NgModule({
  declarations: [DemoComponent, FileExportComponent],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
