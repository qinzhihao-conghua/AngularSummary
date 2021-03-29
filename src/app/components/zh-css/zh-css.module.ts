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
import { EmbossmentBtnComponent } from './embossment-btn/embossment-btn.component';
import { PopupNavbarComponent } from './popup-navbar/popup-navbar.component';

@NgModule({
  declarations: [ZhCssComponent, ZhLoadingComponent, ZhButtonComponent, GradientTextComponent, CardComponent, SvgHoverComponent, WavesBallComponent, EmbossmentBtnComponent, PopupNavbarComponent],
  imports: [
    CommonModule,
    ZhCssRoutingModule
  ]
})
export class ZhCssModule { }
