import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZhCssRoutingModule } from './zh-css-routing.module';
import { ZhCssComponent } from './zh-css.component';
import { ZhLoadingComponent } from './zh-loading/zh-loading.component';
import { ZhButtonComponent } from './zh-button/zh-button.component';
import { GradientTextComponent } from './gradient-text/gradient-text.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ZhCssComponent, ZhLoadingComponent, ZhButtonComponent, GradientTextComponent, CardComponent],
  imports: [
    CommonModule,
    ZhCssRoutingModule
  ]
})
export class ZhCssModule { }
