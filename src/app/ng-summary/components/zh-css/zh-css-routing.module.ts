import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZhCssComponent } from './zh-css.component';
import { ZhLoadingComponent } from './zh-loading/zh-loading.component';
import { ZhButtonComponent } from './zh-button/zh-button.component';
import { GradientTextComponent } from './gradient-text/gradient-text.component';
import { CardComponent } from './card/card.component';
import { SvgHoverComponent } from './svg-hover/svg-hover.component';
import { WavesBallComponent } from './waves-ball/waves-ball.component';

const routes: Routes = [
  {
    path: '',
    component: ZhCssComponent,
    children: [
      { path: 'loading', component: ZhLoadingComponent },
      { path: 'button', component: ZhButtonComponent },
      { path: 'gradient-text', component: GradientTextComponent },
      { path: 'card', component: CardComponent },
      { path: 'svg', component: SvgHoverComponent },
      { path: 'waves', component: WavesBallComponent },
      { path: '', redirectTo: 'loading', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZhCssRoutingModule { }
