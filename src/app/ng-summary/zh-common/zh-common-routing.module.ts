import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZhCommonComponent } from './zh-common.component';
import { ZhRadioComponent } from './zh-radio/zh-radio.component';
import { ZhRadioNewComponent } from './zh-radio-new/zh-radio-new.component';
import { ZhCheckboxComponent } from './zh-checkbox/zh-checkbox.component';

const routes: Routes = [
  {
    path: '',
    component: ZhCommonComponent,
    children: [
      { path: 'radio', component: ZhRadioComponent },
      { path: 'radio-new', component: ZhRadioNewComponent },
      { path: 'checkbox', component: ZhCheckboxComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZhCommonRoutingModule { }
