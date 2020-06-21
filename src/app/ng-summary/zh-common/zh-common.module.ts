import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZhRadioComponent } from './zh-radio/zh-radio.component';
import { ZhCheckboxComponent } from './zh-checkbox/zh-checkbox.component';
import { ZhAlertComponent } from './zh-alert/zh-alert.component';
import { ZhRadioNewComponent } from './zh-radio-new/zh-radio-new.component';
import { ZhCommonComponent } from './zh-common.component';
import { ZhCommonRoutingModule } from './zh-common-routing.module';

@NgModule({
  declarations: [
    ZhRadioComponent,
    ZhCheckboxComponent,
    ZhAlertComponent,
    ZhRadioNewComponent,
    ZhCommonComponent
  ],
  imports: [
    CommonModule,
    ZhCommonRoutingModule
  ],
  exports: [
    ZhRadioComponent,
    ZhCheckboxComponent,
    ZhAlertComponent
  ]
})
export class ZhCommonModule { }
