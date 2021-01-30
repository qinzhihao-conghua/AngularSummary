import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FileExportComponent } from './file-export/file-export.component';
import { DemoRoutingModule } from './demo-routing.module';



@NgModule({
  declarations: [DemoComponent, FileExportComponent],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
