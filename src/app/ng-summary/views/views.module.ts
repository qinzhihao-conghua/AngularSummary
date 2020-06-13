import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDocsComponent } from './common-docs/common-docs.component';
import { ParentComponent } from './component-message/parent/parent.component';
import { ChildrenComponent1 } from './component-message/children1/children1.component';
import { RouterExample } from './router/router-example.component';
import { RouterChild } from './router/router-child/router-child.component';
import { RouterChild2 } from './router/router-child2/router-child2.component';
import { RouterChild3 } from './router/router-child3/router-child3.component';
import { RouterChild4 } from './router/router-child4/router-child4.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { MyUperCasePipe } from '../pipe/my-uper-case.pipe';
import { UploadComponent } from './upload/upload.component';
import { HighLightDirective } from '../directive/high-light.directive';
import { UnLessDirective } from '../directive/un-less.directive';
import { AnimationsComponent } from './animations/animations.component';
import { DynamicFromComponent } from './from/dynamic-from/dynamic-from.component';
import { ReactiveFromComponent } from './from/reactive-from/reactive-from.component';
import { FromComponent } from './from/from.component';
import { DynamicComponent } from './dynamic-component/dynamic.component';
import { DynamicInstanceComponent } from './dynamic-component/dynamic-instance/dynamic-instance.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ZhDialogDirective } from '../directive/zh-dialog.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FileUploadModule } from 'ng2-file-upload';
import { ZhAlertComponent } from '../zh-common/zh-alert/zh-alert.component';
import { ZhCommonModule } from '../zh-common/zh-common.module';
import { Children2Component } from './component-message/children2/children2.component';

@NgModule({
  declarations: [
    CommonDocsComponent,
    ParentComponent,
    ChildrenComponent1,
    RouterExample,
    RouterChild,
    RouterChild2,
    RouterChild3,
    RouterChild4,
    PipeExampleComponent,
    MyUperCasePipe,
    UploadComponent,
    HighLightDirective,
    UnLessDirective,
    AnimationsComponent,
    DynamicFromComponent,
    ReactiveFromComponent,
    FromComponent,
    DynamicComponent,
    DynamicInstanceComponent,
    MainContainerComponent,
    ZhDialogDirective,
    Children2Component
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,//使用ngmodel指令时，必须导入这个模块，否则报错
    //HttpClient,//如果要使用httpclient模块与服务器进行通讯，则这个模块需要手动导入，否则在服务模块没有相应的智能提示
    HttpClientModule,
    CommonModule,
    FileUploadModule,
    ReactiveFormsModule,
    ZhCommonModule
  ],
  exports: [
    CommonDocsComponent,
    ParentComponent,
    ChildrenComponent1,
    RouterExample,
    RouterChild,
    RouterChild2,
    RouterChild3,
    RouterChild4,
    PipeExampleComponent,
    MyUperCasePipe,
    UploadComponent,
    HighLightDirective,
    UnLessDirective,
    AnimationsComponent,
    DynamicFromComponent,
    ReactiveFromComponent,
    FromComponent,
    DynamicComponent,
    DynamicInstanceComponent,
    MainContainerComponent,
    ZhDialogDirective
  ],
  entryComponents: [DynamicInstanceComponent, ZhAlertComponent]
})
export class ViewsModule { }
