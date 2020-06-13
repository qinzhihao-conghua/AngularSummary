import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZhRadioComponent } from './zh-radio/zh-radio.component';
import { ZhCheckboxComponent } from './zh-checkbox/zh-checkbox.component';
import { ZhAlertComponent } from './zh-alert/zh-alert.component';

@NgModule({
  declarations: [
    ZhRadioComponent,
    ZhCheckboxComponent,
    ZhAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ZhRadioComponent,
    ZhCheckboxComponent,
    ZhAlertComponent
  ]
})
export class ZhCommonModule { }
