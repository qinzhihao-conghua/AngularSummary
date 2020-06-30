import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonDocsComponent } from './ng-summary/views/common-docs/common-docs.component';
import { PipeExampleComponent } from './ng-summary/views/pipe-example/pipe-example.component';
import { UploadComponent } from './ng-summary/views/upload/upload.component';
import { AnimationsComponent } from './ng-summary/views/animations/animations.component';
import { FromComponent } from './ng-summary/views/from/from.component';
import { DynamicComponent } from './ng-summary/views/dynamic-component/dynamic.component';

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
  {
    path: 'zh-common',
    loadChildren: './ng-summary/zh-common/zh-common.module#ZhCommonModule'
  },
  {
    path: 'zh-css',
    loadChildren: './ng-summary/zh-css/zh-css.module#ZhCssModule'
  },
  { path: '**', component: CommonDocsComponent }//通配符
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
