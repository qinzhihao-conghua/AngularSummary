import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZhCssComponent } from './zh-css.component';
import { ZhLoadingComponent } from './zh-loading/zh-loading.component';
import { ZhButtonComponent } from './zh-button/zh-button.component';

const routes: Routes = [
  {
    path: '',
    component: ZhCssComponent,
    children: [
      { path: 'loading', component: ZhLoadingComponent },
      { path: 'button', component: ZhButtonComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZhCssRoutingModule { }
