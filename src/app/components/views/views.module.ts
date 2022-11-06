import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDocsComponent } from './common-docs/common-docs.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { UploadComponent } from './upload/upload.component';
import { AnimationsComponent } from './animations/animations.component';
import { DynamicFromComponent } from './from/dynamic-from/dynamic-from.component';
import { ReactiveFromComponent } from './from/reactive-from/reactive-from.component';
import { FromComponent } from './from/from.component';
import { DynamicComponent } from './dynamic-component/dynamic.component';
import { DynamicInstanceComponent } from './dynamic-component/dynamic-instance/dynamic-instance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { ViewsComponent } from './views.component';
import { ViewRoutingModule } from './views-common-routing.module';
import { WidthChildChildrenComponent } from './width-child-children/width-child-children.component';
import { ForViewComponent } from './width-child-children/for-view/for-view.component';
import { ZhForContentComponent } from './width-child-children/zh-for-content/zh-for-content.component';
import { MyUperCasePipe } from '../../main/pipe/my-uper-case.pipe';
import { DirectiveModule } from '../../main/directive/directive.module';
import { HttpExampleComponent } from './http-example/http-example.component';
import { InterceptorDemoInterceptor } from './http-example/interceptor-demo.interceptor';
import { HomeModule } from 'src/app/home/home.module';

@NgModule({
  declarations: [
    CommonDocsComponent,
    PipeExampleComponent,
    MyUperCasePipe,
    UploadComponent,
    AnimationsComponent,
    DynamicFromComponent,
    ReactiveFromComponent,
    FromComponent,
    DynamicComponent,
    DynamicInstanceComponent,
    ViewsComponent,
    WidthChildChildrenComponent,
    ForViewComponent,
    ZhForContentComponent,
    HttpExampleComponent
  ],
  imports: [
    FormsModule,//使用ngmodel指令时，必须导入这个模块，否则报错
    CommonModule,
    HomeModule,
    HttpClientModule,
    FileUploadModule,
    ReactiveFormsModule,
    DirectiveModule,
    ViewRoutingModule
  ],
  exports: [
    CommonDocsComponent,
    PipeExampleComponent,
    MyUperCasePipe,
    UploadComponent,
    AnimationsComponent,
    DynamicFromComponent,
    ReactiveFromComponent,
    FromComponent,
    DynamicComponent,
    DynamicInstanceComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorDemoInterceptor, multi: true }
  ],
  entryComponents: [DynamicInstanceComponent]
})
export class ViewsModule { }
