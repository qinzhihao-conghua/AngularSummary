import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { MainContainerComponent } from './home/main-container/main-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: MainContainerComponent,
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      {
        path: 'base',
        loadChildren: () => import('./components/views/views.module').then(m => m.ViewsModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./components/zh-common/zh-common.module').then(m => m.ZhCommonModule)
      },
      {
        path: 'css',
        loadChildren: () => import('./components/zh-css/zh-css.module').then(m => m.ZhCssModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./components/demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'skill',
        loadChildren: () => import('./components/skill/skill.module').then(m => m.SkillModule)
      },

    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }//通配符
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
