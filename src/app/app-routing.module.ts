import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'base', pathMatch: 'full' },
  {
    path: 'base',
    loadChildren: () => import('./ng-summary/components/views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'component',
    loadChildren: () => import('./ng-summary/components/zh-common/zh-common.module').then(m => m.ZhCommonModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./ng-summary/components/zh-css/zh-css.module').then(m => m.ZhCssModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./ng-summary/components/demo/demo.module').then(m => m.DemoModule)
  },
  { path: '**', redirectTo: 'base', pathMatch: 'full' }//通配符
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
