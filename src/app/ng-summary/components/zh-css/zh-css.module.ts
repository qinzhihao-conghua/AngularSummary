import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZhCssRoutingModule } from './zh-css-routing.module';
import { ZhCssComponent } from './zh-css.component';
import { ZhLoadingComponent } from './zh-loading/zh-loading.component';
import { ZhButtonComponent } from './zh-button/zh-button.component';
import { GradientTextComponent } from './gradient-text/gradient-text.component';
import { CardComponent } from './card/card.component';
import { SvgHoverComponent } from './svg-hover/svg-hover.component';
import { WavesBallComponent } from './waves-ball/waves-ball.component';

@NgModule({
  declarations: [ZhCssComponent, ZhLoadingComponent, ZhButtonComponent, GradientTextComponent, CardComponent, SvgHoverComponent, WavesBallComponent],
  imports: [
    CommonModule,
    ZhCssRoutingModule
  ]
})
export class ZhCssModule { }
