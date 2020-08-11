import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'base', pathMatch: 'full' },
  {
    path: 'base',
    loadChildren: () => import('./ng-summary/views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'component',
    loadChildren: () => import('./ng-summary/zh-common/zh-common.module').then(m => m.ZhCommonModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./ng-summary/zh-css/zh-css.module').then(m => m.ZhCssModule)
  },
  { path: '**', redirectTo: 'base', pathMatch: 'full' }//通配符
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
