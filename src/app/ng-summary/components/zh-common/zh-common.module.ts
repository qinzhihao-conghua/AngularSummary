import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZhRadioComponent } from './zh-radio/zh-radio.component';
import { ZhCheckboxComponent } from './zh-checkbox/zh-checkbox.component';
import { ZhAlertComponent } from './zh-alert/zh-alert.component';
import { ZhRadioNewComponent } from './zh-radio-new/zh-radio-new.component';
import { ZhCommonComponent } from './zh-common.component';
import { ZhCommonRoutingModule } from './zh-common-routing.module';
import { ZhCheckboxNewComponent } from './zh-checkbox-new/zh-checkbox-new.component';
import { ZhOlMapComponent } from './zh-ol-map/zh-ol-map.component';
import { CommonCompComponent } from './common-comp/common-comp.component';

@NgModule({
  declarations: [
    ZhRadioComponent,
    ZhCheckboxComponent,
    ZhAlertComponent,
    ZhRadioNewComponent,
    ZhCommonComponent,
    ZhCheckboxNewComponent,
    ZhOlMapComponent,
    CommonCompComponent
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
