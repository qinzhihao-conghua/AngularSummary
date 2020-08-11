import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { CommonDocsComponent } from './common-docs/common-docs.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { UploadComponent } from './upload/upload.component';
import { AnimationsComponent } from './animations/animations.component';
import { FromComponent } from './from/from.component';
import { DynamicComponent } from './dynamic-component/dynamic.component';
const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      { path: '', redirectTo: 'common-docs', pathMatch: 'full' },
      {
        path: 'component-message',
        loadChildren: () => import('./component-message/component-message.module').then(m => m.ComponentMessageModule)
      },
      {
        path: 'router',
        loadChildren: () => import('./router-example/router-example.module').then(m => m.RouterExampleModule)
      },
      { path: 'pipe', component: PipeExampleComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'animation', component: AnimationsComponent },
      { path: 'from', component: FromComponent },
      { path: 'dynamic', component: DynamicComponent },
      { path: 'common-docs', component: CommonDocsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
