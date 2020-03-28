import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterExample } from './views/router/router-example.component';
import { RouterChild } from './views/router/router-child/router-child.component';
import { RouterChild2 } from './views/router/router-child2/router-child2.component';
import { RouterChild3 } from './views/router/router-child3/router-child3.component';
import { RouterChild4 } from './views/router/router-child4/router-child4.component';
import { LoginGuard } from './guard/login-guard';
import { LeaveGuard } from './guard/leave-guard';
import { PipeExampleComponent } from './views/pipe-example/pipe-example.component';
import { UploadComponent } from './views/upload/upload.component';
import { ParentComponent } from './views/component-message/parent/parent.component';
import { CommonDocsComponent } from './views/common-docs/common-docs.component';

const routes: Routes = [
  { path: '', redirectTo: '/common-docs', pathMatch: 'full' },
  { path: 'common-docs', component: CommonDocsComponent },
  { path: 'component-message', component: ParentComponent },
  {
    path: 'router', component: RouterExample, children: [
      //路由守卫canActivate，满足LoginDuard中的条件之后才允许进入这个组件
      { path: 'router-child', component: RouterChild, canActivate: [LoginGuard] },
      //URL参数传参
      { path: 'router-child2/:id/:name', component: RouterChild2 },
      //路由配置传参
      { path: 'router-child3', component: RouterChild3, data: [{ name: "我是路由配置中的参数", id: "123" }] },
      //辅助路由以及路由守卫，canDeactivate
      { path: 'router-child4', component: RouterChild4, outlet: 'auxiliary', canDeactivate: [LeaveGuard] }
    ]
  },
  // { path: 'router-child4', component: RouterChild4 ,outlet:'auxiliary'},
  { path: 'pipe', component: PipeExampleComponent },
  { path: 'upload', component: UploadComponent },
  { path: '**', component: CommonDocsComponent }//通配符
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []//手动添加的，关于路由守卫的类可以不在这里写，可以在module里的providers里写，这里的providers是手动添加的，网上的教程中此处有这个键，但在本demo中该键本就不存在
})
export class AppRoutingModule { }
