import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterExample } from './router-example.component';
import { RouterChild } from './router-child/router-child.component';
import { RouterChild2 } from './router-child2/router-child2.component';
import { RouterChild3 } from './router-child3/router-child3.component';
import { RouterChild4 } from './router-child4/router-child4.component';
import { LoginGuard } from 'src/app/main/guard/login-guard';
import { LeaveGuard } from 'src/app/main/guard/leave-guard';

const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  {
    path: 'example', component: RouterExample,
    children: [
      //路由守卫canActivate，满足LoginDuard中的条件之后才允许进入这个组件
      { path: 'router-child', component: RouterChild, canActivate: [LoginGuard] },
      //URL参数传参
      { path: 'router-child2/:id/:name', component: RouterChild2 },
      //路由配置传参
      { path: 'router-child3', component: RouterChild3, data: [{ name: "我是路由配置中的参数", id: "123" }] },
      //辅助路由以及路由守卫，canDeactivate
      { path: 'router-child4', component: RouterChild4, outlet: 'auxiliary', canDeactivate: [LeaveGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterExampleRoutingModule { }
