import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZhCommonComponent } from './zh-common.component';
import { ZhRadioComponent } from './zh-radio/zh-radio.component';
import { CommonCompComponent } from './common-comp/common-comp.component';
import { ZhOlMapComponent } from './zh-ol-map/zh-ol-map.component';

const routes: Routes = [
  {
    path: '',
    component: ZhCommonComponent,
    children: [
      {
        path: 'common-comp', component: CommonCompComponent,
        children: []
      },
      { path: 'zh-map', component: ZhOlMapComponent },
      { path: '', redirectTo: 'common-comp', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZhCommonRoutingModule { }
