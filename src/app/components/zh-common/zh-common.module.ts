import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZhAlertComponent } from './zh-alert/zh-alert.component';
import { ZhRadioComponent } from './zh-radio/zh-radio.component';
import { ZhCommonComponent } from './zh-common.component';
import { ZhCommonRoutingModule } from './zh-common-routing.module';
import { ZhCheckboxComponent } from './zh-checkbox/zh-checkbox.component';
import { ZhOlMapComponent } from './zh-ol-map/zh-ol-map.component';
import { CommonCompComponent } from './common-comp/common-comp.component';
import { HomeModule } from 'src/app/home/home.module';

@NgModule({
  declarations: [
    ZhAlertComponent,
    ZhRadioComponent,
    ZhCommonComponent,
    ZhCheckboxComponent,
    ZhOlMapComponent,
    CommonCompComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ZhCommonRoutingModule
  ],
  exports: [
    ZhAlertComponent,
    ZhCheckboxComponent
  ]
})
export class ZhCommonModule { }
