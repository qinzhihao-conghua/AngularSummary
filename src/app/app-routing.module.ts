import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './ng-summary/guard/login-guard';
import { LeaveGuard } from './ng-summary/guard/leave-guard';
import { CommonDocsComponent } from './ng-summary/views/common-docs/common-docs.component';
import { RouterExample } from './ng-summary/views/router-example/router-example.component';
import { RouterChild } from './ng-summary/views/router-example/router-child/router-child.component';
import { RouterChild2 } from './ng-summary/views/router-example/router-child2/router-child2.component';
import { RouterChild3 } from './ng-summary/views/router-example/router-child3/router-child3.component';
import { RouterChild4 } from './ng-summary/views/router-example/router-child4/router-child4.component';
import { PipeExampleComponent } from './ng-summary/views/pipe-example/pipe-example.component';
import { UploadComponent } from './ng-summary/views/upload/upload.component';
import { AnimationsComponent } from './ng-summary/views/animations/animations.component';
import { FromComponent } from './ng-summary/views/from/from.component';
import { DynamicComponent } from './ng-summary/views/dynamic-component/dynamic.component';
import { ZhRadioComponent } from './ng-summary/zh-common/zh-radio/zh-radio.component';
import { ZhCheckboxComponent } from './ng-summary/zh-common/zh-checkbox/zh-checkbox.component';

const routes: Routes = [
  { path: '', redirectTo: '/common-docs', pathMatch: 'full' },
  { path: 'common-docs', component: CommonDocsComponent },
  {
    path: 'component-message',
    loadChildren: './ng-summary/views/component-message/component-message.module#ComponentMessageModule'
  },
  {
    path: 'router',
    loadChildren: './ng-summary/views/router-example/router-example.module#RouterExampleModule'
  },
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'animation', component: AnimationsComponent },
  { path: 'from', component: FromComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'radio', component: ZhRadioComponent },
  { path: 'checkbox', component: ZhCheckboxComponent },
  { path: '**', component: CommonDocsComponent }//通配符
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
