import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZhCssRoutingModule } from './zh-css-routing.module';
import { ZhCssComponent } from './zh-css.component';
import { ZhLoadingComponent } from './zh-loading/zh-loading.component';
import { ZhButtonComponent } from './zh-button/zh-button.component';

@NgModule({
  declarations: [ZhCssComponent, ZhLoadingComponent, ZhButtonComponent],
  imports: [
    CommonModule,
    ZhCssRoutingModule
  ]
})
export class ZhCssModule { }
